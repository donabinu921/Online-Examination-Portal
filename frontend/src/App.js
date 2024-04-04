import { useState } from "react";
import "./App.css";
import TeacherRouter from "./Pages/TeacherDashBoard/TeacherRouter";
import TeacherHome from "./Pages/TeacherDashBoard/TeacherHome";
import CalendarPage from "./Pages/CalendarPage";
import StudentRouter from "./Pages/StudentRouter";
import HomePage from "./Pages/HomePage";
import RetestRequestPage from "./Pages/RetestRequestPage";
import LoginSignUp from "./Pages/LoginSignUp";
import AssessmentPage from "./Pages/AssessmentPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="login-page">
      <Routes>
        <Route exact path="/" element={<LoginSignUp />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/assessment" element={<AssessmentPage />} />

        <Route exact path="/calendar" element={<CalendarPage />} />
        <Route exact path="/retest-request" element={<RetestRequestPage />} />
      </Routes>
    </div>
  );
}

export default App;
