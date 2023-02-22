import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import RequireAuth from "./RequireAuth";
import RedirectAuth from "./RedirectAuth";

const SignIn = lazy(() => import("../pages/Login"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Home = lazy(() => import("../pages/Home"));
export default function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<RedirectAuth />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
