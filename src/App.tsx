import "./App.css";
import { useEffect } from "react";
import AppRouter from "./routes/AppRoutes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshApi } from "@/services/authService";
import { useAuthStore } from "@/stores/useAuthStore";

function App() {
  const { isAuthenticated, login } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    let isActive = true;

    const bootstrapAuth = async () => {
      try {
        const response = await refreshApi();
        const payload = response.data ?? {};

        const accessToken =
          payload.accessToken ??
          payload.data?.accessToken ??
          payload.token ??
          payload.data?.token;

        if (!accessToken || !isActive) {
          return;
        }

        const refreshToken =
          payload.refreshToken ?? payload.data?.refreshToken ?? "";

        const user =
          payload.user ??
          payload.data?.user ??
          payload.userInfo ??
          payload.data?.userInfo ?? {
            id: payload.id ?? payload.data?.id ?? "",
            email: payload.email ?? "",
            name: payload.name ?? payload.email ?? "User",
            role: payload.role ?? "user",
          };

        login(user, accessToken, refreshToken);
      } catch {
        // ignore refresh failures; user stays logged out
      }
    };

    bootstrapAuth();

    return () => {
      isActive = false;
    };
  }, [isAuthenticated, login]);

  return (
    // Your navigation components here (Navbar, etc.)
    <main>
      <AppRouter />
      <ToastContainer />
    </main>
  );
}

export default App;
