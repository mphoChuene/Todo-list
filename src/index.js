import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import TodoList from "./TodoList";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*  <TodoList /> */}
    <App />
  </React.StrictMode>
);
