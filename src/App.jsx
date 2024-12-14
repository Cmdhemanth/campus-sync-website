import "./App.css";
import { Header } from "./components/layout/Header";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dept from "./components/DepartmentSPOC/Dept";
import CollegeForm from "./components/Admin/CollegeForm";
import Subject from "./components/Subject/SubjectDetails";
import Assignment from "./components/Assignment/AssignmentCard";
import AssessmentCard from "./components/Assignment/AssessmentCard";
import Performance from "./components/OverallPerformance/Performance";
import StudentDetails from "./components/Student/StudentDetails";
import Inst from "./components/InstitutionSPOC/Institution";
import InstHeader from "./components/HeaderForms/InstitutionHeader";
import InstInstructor from "./components/HeaderForms/InstitutionIntsructor";
import DeptStudents from "./components/HeaderForms/DepartmentStudents";
import DeptSubjects from "./components/HeaderForms/DepartmentSubjects";
import Cards from "./components/ClassCards/CardsGrid";
import LoginPage from "./components/Login/login-page";
import { useEffect, useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { GetUserCookie } from "./utils/auth/cookies";
import DepartmentCards from "./components/InstitutionSPOC/DepartmentCards";
function App() {
  const [tempState, setTempState] = useState(true);
  const user = GetUserCookie();
  const accountType = user?.account_type;
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {user && (accountType === "student" || accountType === "instructor") && (
        <Sidebar />
      )}
      <div className="flex-1 flex flex-col">
        {user && <Header />}
        <main className={`flex-1 ${user ? "p-8" : ""}`}>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/admin" element={<CollegeForm />} />
            <Route path="/institution-spoc" element={<Inst />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/department-spoc" element={<Dept />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
