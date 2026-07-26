import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import ProtectedRoute from "../auth/ProtectedRoute";
import RoleGuard from "../auth/RoleGuard";
import MainLayout from "../layouts/MainLayout";
import AdminPage from "../pages/Admin/AdminPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EmployeePage from "../pages/Employee/EmployeePage";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import UnauthorizedPage from "../pages/Unauthorized/UnauthorizedPage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/403" element={<UnauthorizedPage />} />

                <Route
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/employees" element={<EmployeePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route
                        path="/admin"
                        element={
                            <RoleGuard roles={["admin"]}>
                                <AdminPage />
                            </RoleGuard>
                        }
                    />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}