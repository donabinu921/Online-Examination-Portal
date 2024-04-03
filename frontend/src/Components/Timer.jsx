import React from 'react';
import { Statistic } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60;

const onFinish = () => {
  console.log('finished!');
};

const Timer = () => (
      <Countdown title="Timer" value={deadline} onFinish={onFinish} />    
);
export default Timer;