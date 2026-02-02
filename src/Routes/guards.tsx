import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";

/**
 * PublicRoute:
 * - Nếu đã đăng nhập (isAuthenticated & accessToken) -> Redirect về /home
 * - Nếu chưa đăng nhập -> Render children (Login/Register page)
 */
export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, accessToken } = useAuthStore();

  if (isAuthenticated && accessToken) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

/**
 * PrivateRoute:
 * - Nếu chưa đăng nhập -> Redirect về /login
 * - Nếu đã đăng nhập -> Render children
 */
export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, accessToken } = useAuthStore();

  if (!isAuthenticated || !accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
