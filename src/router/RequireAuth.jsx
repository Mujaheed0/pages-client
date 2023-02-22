import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const location = useLocation();
  const { currentUser } = useSelector((s) => s.auth);
  const uid = localStorage.getItem("assignment/user-id");

  return uid || currentUser !== undefined ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
