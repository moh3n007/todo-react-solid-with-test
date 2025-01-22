// components
import { StrictMode } from "react";
import Todo from "@components/TodoApp";

// funcs
import { createRoot } from "react-dom/client";

// styles
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
