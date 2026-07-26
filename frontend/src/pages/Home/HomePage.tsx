import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Employee Security Portal</h1>
            <p>This application demonstrates OAuth2, OpenID Connect, JWT validation, and Keycloak authorization in a React + Spring Boot setup.</p>
            <Link to="/login">Continue to login</Link>
        </div>
    );
}

export default HomePage;