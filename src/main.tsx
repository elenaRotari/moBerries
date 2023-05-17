import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import MyContext from "./MyContext";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </React.StrictMode>
);
