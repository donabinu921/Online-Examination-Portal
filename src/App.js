import { useState } from 'react';
import './App.css';
import StudentRouter from './Pages/StudentRouter';
import LoginSignUp from './Pages/LoginSignup';
function App() {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setIsLoginClicked(true);
  };

  return (
    <div className={isLoginClicked ? '' : 'main'}>
      {isLoginClicked ? <StudentRouter /> : <LoginSignUp onLoginClick={handleLoginClick} />}
    </div>
  );
}

export default App;
