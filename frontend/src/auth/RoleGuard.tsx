import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

type RoleGuardProps = {
    children: React.ReactNode;
    roles: string[];
};

function RoleGuard({ children, roles }: RoleGuardProps) {
    const { ready, hasAnyRole } = useAuth();

    if (!ready) {
        return <p>Loading...</p>;
    }

    if (!hasAnyRole(roles)) {
        return <Navigate to="/403" replace />;
    }

    return <>{children}</>;
}

export default RoleGuard;