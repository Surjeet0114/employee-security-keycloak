import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

function LoginPage() {
    const { ready, authenticated, login } = useAuth();

    if (!ready) {
        return <p>Loading...</p>;
    }

    if (authenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div>
            <h1>Login</h1>
            <p>Please sign in with Keycloak to access the protected application.</p>
            <button onClick={() => login()}>Login with Keycloak</button>
        </div>
    );
}

export default LoginPage;