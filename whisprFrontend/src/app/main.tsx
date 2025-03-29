import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import AuthProvider from "../contexts/AuthContext";
import SocketProvider from "../contexts/SocketContext";

import HomeLayout from "../layouts/HomeLayout";
import ChatsLayout from "../layouts/ChatsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute, RedirectRoute } from "./ProtectedRoute";
import ConversationProvider from "../contexts/ConversationContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <HomeLayout />,
        children: [
          {
            path: "",
            element: <ChatsLayout />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <RedirectRoute />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        children: [
          { path: "log-in", element: <Login /> },
          { path: "sign-up", element: <SignUp /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <SocketProvider>
        <ConversationProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            theme="dark"
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            style={{ width: "300px", minHeight: "30px" }}
            stacked
            closeButton={false}
          />
        </ConversationProvider>
      </SocketProvider>
    </AuthProvider>
  </StrictMode>
);
