import React from 'react'
import { List, Radio } from 'antd';
const questions = [
  {
    title: '1. What is the capital of France?',
  },
  {
    title: '2. What is the capital of Germany?',
  },
  {
    title: '3. What is the capital of Spain?',
  },
  {
    title: '4. What is the capital of Italy?',
  },
];

const options = [
  {
    title: 'Paris',
  },
  {
    title: 'Berlin',
  },
  {
    title: 'Madrid',
  },
  {
    title: 'Rome',
  },
];
const TestForm = () => (
  <div className='testFormContainer'>
    <List
    itemLayout="horizontal"
    dataSource={questions}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={item.title}
          description={
            <Radio.Group>
              {options.map((option) => (
                <Radio key={option.title} value={option.title}>
                  {option.title}
                </Radio>
              ))}
            </Radio.Group>
          }
        />
      </List.Item>
    )}
  />  
  </div>
);
export default TestForm;