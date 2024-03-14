import LoginSignup from './Pages/LoginSignup';
import HomePage from './Pages/HomePage';
import CalendarPage from './Pages/CalendarPage';
import RetestRequestPage from './Pages/RetestRequestPage';
import AssessmentPage from './Pages/AssessmentPage';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/assessment' element={<AssessmentPage />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/retest-request' element={<RetestRequestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
