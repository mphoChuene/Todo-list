import React from "react";
/* import "react-toastify/dist/react-toastify.css"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/* importing pages  */
import TodoList from "./TodoList";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

export const App = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);
  return (
    <>
      <div>
        {showmenu && (
          <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/customer"}>Customer</Link>
            <span style={{ marginLeft: "70%" }}>
              Welcome <b>{displayusername}</b>
            </span>
            <Link style={{ float: "right" }} to={"/login"}>
              Logout
            </Link>
          </div>
        )}
      </div>
      {/*   routing of pages */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todolist" element={<TodoList />} />
        </Routes>
      </Router>
      ;
    </>
  );
};
