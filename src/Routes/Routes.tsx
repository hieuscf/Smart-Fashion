import { type AppRoute } from "./types";

// // Example layouts
// import DefaultLayout from "../layouts/DefaultLayout";
// import AdminLayout from "../layouts/AdminLayout";

// Example pages
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Dashboard from "../pages/admin/Dashboard";

const publicRouter: AppRoute[] = [
  //   {
  //     path: "/",
  //     element: <Home />,
  //     layout: DefaultLayout,
  //   },
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
