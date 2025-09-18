import type { FC } from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router";

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-700">
        {/* Top Buttons */}
        <div className="">
          <Navigation />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
