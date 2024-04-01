import NavigateToTeacherHome from './NavigateToTeacherHome';
import TeacherHome from './TeacherHome';
import TeacherCalendar from './TeacherCalendar';
import TeacherTests from './TeacherTests';
import TeacherRetests from './TeacherRetests';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateTestForm from './CreateTestForm';
function TeacherRouter() {
    return (
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route index element={<NavigateToTeacherHome />} />
            <Route path='/teacher-home' element={<TeacherHome />} />
            <Route path='/teacher-calendar' element={<TeacherCalendar />} />
            <Route path='/teacher-tests' element={<TeacherTests />} />
            <Route path='/teacher-retests' element={<TeacherRetests />} />
            <Route path='/create-test-form' element={<CreateTestForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default TeacherRouter;
  