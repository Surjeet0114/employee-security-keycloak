import { useEffect, useMemo, useState } from "react";
import keycloak from "./keycloak";
import { AuthContext, type AuthContextValue, type AuthUser } from "./useAuth";

type Props = {
    children: React.ReactNode;
};

type ParsedToken = {
    preferred_username?: string;
    email?: string;
    given_name?: string;
    family_name?: string;
    realm_access?: {
        roles?: string[];
    };
};

function getUserFromToken(tokenParsed: ParsedToken | undefined): AuthUser | null {
    if (!tokenParsed) {
        return null;
    }

    return {
        username: tokenParsed.preferred_username,
        email: tokenParsed.email,
        firstName: tokenParsed.given_name,
        lastName: tokenParsed.family_name,
    };
}

export default function AuthProvider({ children }: Props) {
    const [ready, setReady] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState<AuthUser | null>(null);
    const [roles, setRoles] = useState<string[]>([]);

    useEffect(() => {
        let active = true;

        const syncAuthState = () => {
            if (!active) {
                return;
            }

            const parsedToken = keycloak.tokenParsed as ParsedToken | undefined;
            setAuthenticated(Boolean(keycloak.authenticated));
            setUser(getUserFromToken(parsedToken));
            setRoles(parsedToken?.realm_access?.roles ?? []);
        };

        const initialize = async () => {
            try {
                await keycloak.init({
                    onLoad: "check-sso",
                    checkLoginIframe: false,
                    pkceMethod: "S256",
                });

                if (!active) {
                    return;
                }

                syncAuthState();
            } catch (error) {
                console.error("Keycloak initialization failed", error);
            } finally {
                if (active) {
                    setReady(true);
                }
            }
        };

        keycloak.onAuthSuccess = () => syncAuthState();
        keycloak.onAuthRefreshSuccess = () => syncAuthState();
        keycloak.onAuthLogout = () => syncAuthState();
        keycloak.onTokenExpired = () => {
            keycloak.updateToken(30).catch(() => {
                keycloak.logout({ redirectUri: window.location.origin });
            });
        };

        void initialize();

        const refreshInterval = window.setInterval(() => {
            if (keycloak.authenticated) {
                void keycloak.updateToken(70);
            }
        }, 30000);

        return () => {
            active = false;
            window.clearInterval(refreshInterval);
        };
    }, []);

    const login = () => {
        void keycloak.login({ redirectUri: `${window.location.origin}/dashboard` });
    };

    const logout = () => {
        void keycloak.logout({ redirectUri: window.location.origin });
    };

    const refreshToken = async () => {
        if (!keycloak.authenticated) {
            return false;
        }

        try {
            return await keycloak.updateToken(70);
        } catch (error) {
            console.error("Token refresh failed", error);
            return false;
        }
    };

    const value = useMemo<AuthContextValue>(
        () => ({
            ready,
            authenticated,
            user,
            roles,
            login,
            logout,
            refreshToken,
            hasRole: (role: string) => roles.includes(role),
            hasAnyRole: (requiredRoles: string[]) => requiredRoles.some((role) => roles.includes(role)),
        }),
        [authenticated, ready, roles, user]
    );

    if (!ready) {
        return <h2>Loading authentication...</h2>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}