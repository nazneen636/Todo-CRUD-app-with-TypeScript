import React from "react";
import { NavLink } from "react-router";
import { RouteIndex, RouteTaskList } from "../helpers/route";

interface navigationType {
  id: number;
  label: string;
  to: string;
}
const navigationItems: navigationType[] = [
  { id: 1, label: "Add Task", to: RouteIndex },
  { id: 2, label: "My Task", to: RouteTaskList },
];

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        {navigationItems?.map((item) => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive, isPending }) =>
              isPending
                ? "opacity-70"
                : isActive
                ? "px-5 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-red-600 cursor-not-allowed"
                : "px-5 py-2 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 hover:shadow-indigo-700 transition"
            }
          >
            {item.label}
          </NavLink>
        ))}
        {/* <NavLink
          to={RouteTaskList}
          className={({ isActive, isPending }) =>
            isPending
              ? "opacity-70"
              : isActive
              ? "px-5 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-pink-500 to-red-600 cursor-not-allowed"
              : "px-5 py-2 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 hover:shadow-indigo-700 transition"
          }
        >
          My Task
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navigation;
