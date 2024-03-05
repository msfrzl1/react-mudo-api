import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MenuDetailPage from "../pages/MenuDetailPage";
import MenuPage from "../pages/MenuPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <MenuPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetailPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
