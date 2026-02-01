import { Routes, Route } from "react-router-dom";
import type { AppRoute } from "../routes/types";
import { publicRouter, privateRouter, adminRouter } from "../routes/Routes";

function AppRouter() {
  const renderRoute = (route: AppRoute, index: number) => {
    const Layout = route.layout;

    // Nếu route có layout → tạo route cha
    if (Layout) {
      return (
        <Route key={index} element={<Layout />}>
          <Route path={route.path} element={route.element} />
        </Route>
      );
    }

    // Không có layout → render route bình thường
    return <Route key={index} path={route.path} element={route.element} />;
  };

  return (
    <Routes>
      {publicRouter.map(renderRoute)}
      {privateRouter.map(renderRoute)}
      {adminRouter.map(renderRoute)}

      {/* 404 fallback 
      <Route path="*" element={<NotFound />} /> 
      */}
    </Routes>
  );
}

export default AppRouter;
