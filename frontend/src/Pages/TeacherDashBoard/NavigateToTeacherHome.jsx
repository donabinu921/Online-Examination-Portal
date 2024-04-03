import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NavigateToTeacherHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/teacher-home');
  }, [navigate]);

  return null;
};

export default NavigateToTeacherHome;