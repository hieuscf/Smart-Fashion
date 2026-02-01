import LuxuryHeader from "../../../components/Header/LuxuryHeader";
import LuxuryFooter from "../../../components/Footer/LuxuryFooter";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <LuxuryHeader />

      {/* Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <LuxuryFooter />
    </div>
  );
}
