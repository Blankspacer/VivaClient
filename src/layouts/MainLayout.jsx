import { cn } from "@/lib/utils";
import Footer from "@/pages/mainPages/shared/Footer";
import Navbar from "@/pages/mainPages/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={cn("bg-[#141414] min-h-screen")}>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
