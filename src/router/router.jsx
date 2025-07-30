import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import PublicRoute from "./PublicRoute";
import RouteGuard from "./RouteGuard";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfileForm from "../pages/ProfileForm";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
        element={
          <RouteGuard>
            <App />
          </RouteGuard>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>

      <Route
        path="/profile-form"
        element={
          <RouteGuard>
            <ProfileForm />{" "}
          </RouteGuard>
        }
      />
    </Routes>
  );
};

export default AppRouter;
