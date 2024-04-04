import NavigateToTeacherHome from './NavigateToTeacherHome';
import TeacherHome from './TeacherHome';
import TeacherCalendar from './TeacherCalendar';
import TeacherTests from './TeacherTests';
import TeacherRetests from './TeacherRetests';
import { Routes, Route } from 'react-router-dom';
import CreateTestForm from './CreateTestForm';
import TestCreated from './TestCreated';
function TeacherRouter() {
    return (
      <div className="main">
          <Routes>
            <Route index element={<NavigateToTeacherHome />} />
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
  
  export default TeacherRouter;
  