import { createBrowserRouter } from "react-router-dom";
import LandingPage from "@/components/LandingPage";
import Signup from "@/auth/Signup";
import Signin from "@/auth/Signin";
import AuthLayout from "@/auth/AuthLayout";
import ChatPage from "@/chat/ChatPage";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import ContactPage from "./components/ContactPage";
import ProfilePage from "./components/ProfilePage";
import SettingsPage from "./components/SettingsPage";
import PageLayout from "./components/PageLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "",
        element: <PageLayout />,
        children: [
          {
            path: "chats",
            element: <ChatPage />,
          },
          {
            path: "contacts",
            element: <ContactPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
        ],
      },
    ],
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
