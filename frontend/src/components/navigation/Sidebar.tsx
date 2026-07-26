import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            style={{
                width: "220px",
                padding: "20px",
                background: "#f5f5f5",
                minHeight: "calc(100vh - 60px)"
            }}
        >
            <h3>Menu</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </aside>
    );
}

export default Sidebar;