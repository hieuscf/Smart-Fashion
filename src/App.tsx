import "./App.css";
import AppRouter from "./routes/AppRoutes.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // Your navigation components here (Navbar, etc.)
    <main>
      <AppRouter />
      <ToastContainer />
    </main>
  );
}

export default App;
