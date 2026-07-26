import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

type ProtectedRouteProps = {
    children?: React.ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { ready, authenticated } = useAuth();
    const location = useLocation();

    if (!ready) {
        return <p>Loading...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;