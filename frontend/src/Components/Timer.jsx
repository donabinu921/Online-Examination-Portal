import React from 'react';
import { Statistic } from 'antd';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60;

const onFinish = () => {
  console.log('finished!');
};

const Timer = () => {
  
  const navigate = useNavigate();

  const onFinish = () => {
    console.log('finished!');
    toast.success('Timer Finished, Test Over!');
    navigate('/assessment');
  };
  return(
    <Countdown title="Timer" value={deadline} onFinish={onFinish} />    
);
}
export default Timer;