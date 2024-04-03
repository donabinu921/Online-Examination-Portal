import { useState } from 'react';
import './App.css';
import TeacherRouter from './Pages/TeacherDashBoard/TeacherRouter';
import StudentRouter from './Pages/StudentRouter';
import LoginSignUp from './Pages/LoginSignUp';

function App() {

  return (
    <div className='login-page'>
      <LoginSignUp />
    </div>
  );
}

export default App;
