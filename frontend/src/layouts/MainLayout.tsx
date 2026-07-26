import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import Sidebar from "../components/navigation/Sidebar";

function MainLayout() {
    return (
        <>
            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >
                <Sidebar />

                <main
                    style={{
                        flex: 1,
                        padding: "20px"
                    }}
                >
                    <Outlet />
                </main>
            </div>
        </>
    );
}

export default MainLayout;