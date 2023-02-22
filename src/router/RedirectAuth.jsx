import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function RedirectAuth() {
  const location = useLocation();
  const { currentUser } = useSelector((s) => s.auth);
  const uid = localStorage.getItem("assignment/user-id");

  return uid || currentUser !== undefined ? (
    <Navigate to="/home" state={{ from: location }} replace={true} />
  ) : (
    <Outlet />
  );
}
