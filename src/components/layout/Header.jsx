import { User, LogOut } from "lucide-react";
import { getUser } from "../../helpers/user";

export const Header = () => {
  const user = getUser();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome, {user?.name}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => {
                console.log("logout");
              }}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <LogOut className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
