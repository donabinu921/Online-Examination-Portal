import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import RetestRequestPage from './RetestRequestPage';
import AssessmentPage from './AssessmentPage';
import TestPage from './TestPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function StudentRouter() {
    return (
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/assessment' element={<AssessmentPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/retest-request' element={<RetestRequestPage />} />
            <Route path='/test' element={<TestPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default StudentRouter;
  