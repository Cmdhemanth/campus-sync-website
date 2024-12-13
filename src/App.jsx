import "./App.css";
import { Header } from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dept from "./components/DepartmentSPOC/Dept";
import CollegeForm from "./components/Admin/CollegeForm";
import Subject from "./components/Subject/SubjectDetails";
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
