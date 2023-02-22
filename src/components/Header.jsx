import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutHandler } from "../store/features/Auth/thunk";
import Button from "./Button";
function Header() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 flex items-center justify-between bg-white py-2 px-4 shadow-lg md:px-8">
      <h1 className="text-lg font-bold text-gray-800 md:text-xl">
        Social Posts Scheduler
      </h1>
      {currentUser !== undefined ? (
        <div className="flex items-center justify-between gap-4">
          <div className="font font-semibold">Hi {currentUser.name}</div>
          <Button onClick={() => dispatch(signOutHandler())}>
            <span className="inline">Logout</span>
          </Button>
        </div>
      ) : (
        <Button onClick={() => navigate("/login")}>
          <span className="inline">LOGIN</span>
        </Button>
      )}
    </header>
  );
}

export default Header;
