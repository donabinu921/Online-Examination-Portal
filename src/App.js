import { useState } from 'react';
import './App.css';
import TeacherRouter from './Pages/TeacherDashBoard/TeacherRouter';
import StudentRouter from './Pages/StudentRouter';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  return (
    <div className='login-page'>
      {isLoginClicked ? <TeacherRouter /> : <LoginSignUp onLoginClick={handleLoginClick} />}
    </div>
  );
}

export default App;
