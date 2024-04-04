import "./App.css";
import CalendarPage from "./Pages/CalendarPage";
import TestPage from "./Pages/TestPage";
import HomePage from "./Pages/HomePage";
import RetestRequestPage from "./Pages/RetestRequestPage";
import LoginSignUp from "./Pages/LoginSignUp";
import AssessmentPage from "./Pages/AssessmentPage";
import TeacherHome from "./Pages/TeacherDashBoard/TeacherHome";
import TeacherCalendar from "./Pages/TeacherDashBoard/TeacherCalendar";
import TeacherTests from "./Pages/TeacherDashBoard/TeacherTests";
import TeacherRetests from "./Pages/TeacherDashBoard/TeacherRetests";
import CreateTestForm from "./Pages/TeacherDashBoard/CreateTestForm";
import TestCreated from "./Pages/TeacherDashBoard/TestCreated";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-page">
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/retest-request" element={<RetestRequestPage />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/teacher-home' element={<TeacherHome />} />
        <Route path='/teacher-calendar' element={<TeacherCalendar />} />
        <Route path='/teacher-tests' element={<TeacherTests />} />
        <Route path='/teacher-retests' element={<TeacherRetests />} />
        <Route path='/create-test-form' element={<CreateTestForm />} />
        <Route path='/test-created' element={<TestCreated />} />
      </Routes>
    </div>
  );
}

export default App;
