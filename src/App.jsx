import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* importing pages  */
import TodoList from "./TodoList";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

export const App = () => {
  return (
    <>
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
