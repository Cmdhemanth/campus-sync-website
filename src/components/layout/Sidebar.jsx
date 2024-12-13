import { NavLink } from "react-router-dom";
import {
  Calendar,
  BookOpen,
  Users,
  Award,
  CreditCard,
  Bell,
} from "lucide-react";
import { getUser } from "../../helpers/user";

export const Sidebar = () => {
  const user = getUser();

  const menuItems = [
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: BookOpen, label: "Courses", path: "/courses" },
    {
      icon: Users,
      label: "Users",
      path: "/users",
      roles: ["admin", "institute_spoc", "department_spoc"],
    },
    { icon: Award, label: "Leaderboard", path: "/leaderboard" },
    {
      icon: CreditCard,
      label: "Credits",
      path: "/credits",
      roles: ["student"],
    },
    { icon: Bell, label: "Notifications", path: "/notifications" },
  ].filter((item) => !item.roles || item.roles.includes(user?.role || ""));

  return (
    <div className="w-64 bg-white h-screen shadow-lg">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">CampusSync</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? "bg-gray-100 border-r-4 border-blue-500" : ""
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
