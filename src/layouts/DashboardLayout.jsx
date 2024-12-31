import "preline/preline";
import SidebarNav from "@/components/dashboard/Sidebar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  useEffect(() => {
    const initPreline = () => {
      if (typeof window !== "undefined" && window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    const timeoutId = setInterval(initPreline, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative min-h-screen lg:flex roboto">
      <SidebarNav />

      {/* outlet */}
      <div className="flex-1 lg:ml-64 mt-32 lg:mt-7">
        <div className="px-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
