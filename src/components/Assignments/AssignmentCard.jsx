import { BookOpen, Users, Bell } from "lucide-react";

export default function AssignmentCard() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Advanced Maths
          </h3>
          <BookOpen className="w-5 h-5 text-blue-500" />
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          Course related to MAths
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>Students</span>
          </div>
          <div className="flex items-center">
            <Bell className="w-4 h-4 mr-1" />
            <span>Updates</span>
          </div>
        </div>
      </div>
    </>
  );
}
