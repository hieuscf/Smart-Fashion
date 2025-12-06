import React from "react";
import { Routes, Route } from "react-router-dom";
import { type AppRoute } from "./types.tsx";
import { publicRouter, privateRouter, adminRouter } from "./Routes.tsx";

function AppRouter() {
  const renderRoute = (route: AppRoute, index: number) => {
    const Layout = route.layout || React.Fragment;

    return (
      <Route
        key={index}
        path={route.path}
        element={<Layout>{route.element}</Layout>}
      />
    );
  };

  return (
    <Routes>
      {/* public routes */}
      {publicRouter.map(renderRoute)}

      {/* private routes */}
      {privateRouter.map(renderRoute)}

      {/* admin routes */}
      {adminRouter.map(renderRoute)}

      {/* 404 fallback 
      <Route path="*" element={<NotFound />} /> 
      */}
    </Routes>
  );
}

export default AppRouter;
