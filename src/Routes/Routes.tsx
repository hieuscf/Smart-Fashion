import { type AppRoute } from "../routes/types";
import MainLayout from "../app/layouts/user/MainLayout";

import LoginPage from "../pages/LoginPage";
import LuxuryHomepage from "../pages/HomePage";
import LuxuryRegisterPage from "../pages/RegisterPage";

const publicRouter: AppRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <LuxuryRegisterPage />,
  },
  {
    path: "/test",
    element: <LuxuryHomepage />,
    layout: MainLayout,
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //     layout: DefaultLayout,
  //   },
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
