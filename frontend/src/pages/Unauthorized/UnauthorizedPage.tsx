import { Link } from "react-router-dom";

function UnauthorizedPage() {
    return (
        <div>
            <h1>Access denied</h1>
            <p>You do not have permission to view this page.</p>
            <Link to="/dashboard">Go to dashboard</Link>
        </div>
    );
}

export default UnauthorizedPage;