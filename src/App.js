import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Router from "./router";
import { loggedInUserInfo } from "./store/features/Auth/thunk";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("assignment/user-id");
  console.log(token);
  useEffect(() => {
    if (token) dispatch(loggedInUserInfo(token));
  }, [token, dispatch]);
  return (
    <>
      <Header></Header>
      <Toaster></Toaster>
      <Router></Router>
    </>
  );
}

export default App;
