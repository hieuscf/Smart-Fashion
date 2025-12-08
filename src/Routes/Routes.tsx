import { type AppRoute } from "./types";
import LoginPage from "../pages/LoginPage";
import Header from "../components/Header/Header";

const publicRouter: AppRoute[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/test",
    element: <Header />,
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
