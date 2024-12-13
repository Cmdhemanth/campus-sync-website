import "./App.css";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import AssignmentCard from "./components/Assignments/AssignmentCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/ClassCards/Cards";
import Dept from "./components/DepartmentSPOC/Dept";
import Form from "./components/Instructorform/FormInst";
import Dropdown from "./components/ExistingInstructor/Dropdown";
import CollegeForm from "./components/Admin/CollegeForm";
import Timetable from "./components/Timetable/Edittt";
import SubjectRow from "./components/TableRow/SubjectRow";
import StudentRow from "./components/TableRow/StudentRow";
import FormInstNew from "./components/Instructorform/FormInstNew";
import Subject from "./components/Subject/SubjectDetails";
import Assignment from "./components/Assignment/AssignmentCard";
import AssessmentCard from "./components/Assignment/AssessmentCard";
import Performance from "./components/OverallPerformance/Performance";
function App() {
  return (
    <BrowserRouter>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="main">
          <Routes>
            <Route index element={<Dept />} />
            <Route path="/admin" element={<CollegeForm />} />
            <Route path="/subject" element={<Subject />} />
          </Routes>
        </div>
        {/* <Form /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
