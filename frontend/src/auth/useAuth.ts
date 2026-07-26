import { createContext, useContext, type ReactNode } from "react";

type AuthUser = {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
};

type AuthContextValue = {
    ready: boolean;
    authenticated: boolean;
    user: AuthUser | null;
    roles: string[];
    login: () => void;
    logout: () => void;
    refreshToken: () => Promise<boolean>;
    hasRole: (role: string) => boolean;
    hasAnyRole: (roles: string[]) => boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside an AuthProvider");
    }

    return context;
}

export { AuthContext, useAuth };
export type { AuthContextValue, AuthUser };
export type AuthProviderProps = {
    children: ReactNode;
};
