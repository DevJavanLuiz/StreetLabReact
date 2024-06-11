import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/home/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <ToastContainer />
      <RouterProvider router={router} />;
    </div>
  </React.StrictMode>
);
