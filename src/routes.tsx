import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/components/LandingPage";
import Signup from "@/auth/Signup";
import Signin from "@/auth/Signin";
import AuthLayout from "@/auth/AuthLayout";
import ChatPage from "@/components/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/chats",
    element: <ChatPage />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      { path: "signup", element: <Signup /> },
      {
        path: "signin",
        element: <Signin />,
      },
    ],
  },
]);
