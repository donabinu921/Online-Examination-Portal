import React from "react";
import { List, Radio } from "antd";
const questions = [
  {
    title: "What is the capital of France?",
    option1: "Paris",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Paris",
  },
  {
    title: "What is the capital of Germany?",
    option1: "Berlin",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Berlin",
  },
  {
    title: "What is the capital of Spain?",
    option1: "Madrid",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Madrid",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
  {
    title: "What is the capital of Italy?",
    option1: "Rome",
    option2: "London",
    option3: "Tokyo",
    option4: "New York",
    answer: "Rome",
  },
];


const TestForm = ({ setResults }) => {
  
  const handleOptionChange = (e) => {
    console.log(e.target.value);
    // setResults(e.target.value); // Pass the selected option value to setResults
  };

  return (
    <div className="testFormContainer">
      <List
        itemLayout="horizontal"
        dataSource={questions}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={index + 1 + "." + item.title}
              description={
                <Radio.Group onChange={handleOptionChange}>
                  <Radio key={item.option1} value={item.option1}>
                    {item.option1}
                  </Radio>
                  <Radio key={item.option2} value={item.option2}>
                    {item.option2}
                  </Radio>
                  <Radio key={item.option3} value={item.option3}>
                    {item.option3}
                  </Radio>
                  <Radio key={item.option4} value={item.option4}>
                    {item.option4}
                  </Radio>
                </Radio.Group>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};
export default TestForm;
