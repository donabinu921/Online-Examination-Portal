import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NavigateToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
};

export default NavigateToHome;