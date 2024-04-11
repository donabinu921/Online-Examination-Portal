import React, {useState} from "react";
import { List, Radio, Button } from "antd";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import "../Styles/TestForm.css";
import axios from 'axios';

// const questions = [
//   {
//     title: "What is the capital of France?",
//     options: ["Rome", "London", "Tokyo", "New York"],
//     answer: "Paris",
//   },
//   {
//     title: "What is the capital of Germany?",
//     options: ["Rome", "London", "Tokyo", "New York"],
//     answer: "Berlin",
//   },
//   {
//     title: "What is the capital of Spain?",
//     options: ["Rome", "London", "Tokyo", "New York"],
//     answer: "Madrid",
//   },
//   {
//     title: "What is the capital of Italy?",
//     options: ["Rome", "London", "Tokyo", "New York"],
//     answer: "Rome",
//   },
// ];


const TestForm = ({testName}) => {

  const [questions, setQuestions] = useState([]);

  axios.get('https://661434ae2fc47b4cf27be0bb.mockapi.io/testPaper')
  .then((res) => {
    console.log(res)
    setQuestions(res.data)
    console.log(questions,"QUESTIONSSSS")
  }).catch((error)=>{console.log(error)});

  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleOptionChange = (e, questionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = e.target.value;
    setSelectedOptions(newSelectedOptions);
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    selectedOptions.forEach((option, index) => {
    console.log(`${index + 1}: ${option}`);
  });
  }

  return (
    <div className="testFormContainer">
      <div className="heading">
      <p>{testName}</p>
      <Timer />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={questions}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={index + 1 + "." + item.question}
              description={
                <Radio.Group onChange={(e) => handleOptionChange(e, index)}>
                  {item.options.map((option, optionIndex) => (
                    <Radio key={optionIndex} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Radio.Group>
              }
            />
          </List.Item>
        )}
      />
      <div className='testSubmit'>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};
export default TestForm;
