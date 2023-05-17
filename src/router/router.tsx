import { createBrowserRouter } from "react-router-dom";
import App, { loader as usersLoader } from "../App";
import ErrorPage from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: usersLoader,
  },
]);
