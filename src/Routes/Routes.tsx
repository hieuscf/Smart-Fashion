import { type AppRoute } from "../routes/types";
import MainLayout from "../app/layouts/user/MainLayout";

import LoginPage from "../pages/LoginPage";
import LuxuryHomepage from "../pages/HomePage";
import LuxuryRegisterPage from "../pages/RegisterPage";

import { Navigate } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./guards";

const publicRouter: AppRoute[] = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <LuxuryRegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: "/home",
    element: <LuxuryHomepage />,
    layout: MainLayout,
  },
];

const privateRouter: AppRoute[] = [
  // Example: need login
];

const adminRouter: AppRoute[] = [
  //   {
  //     path: "/admin/dashboard",
  //     element: <Dashboard />,
  //     layout: AdminLayout,
  //     roles: ["admin"],
  //   },
];

export { publicRouter, privateRouter, adminRouter };
