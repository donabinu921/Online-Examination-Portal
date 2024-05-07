import '../Styles/TestPage.css'
import React, { useEffect, useState } from "react";
import { List, Radio, Button } from "antd";
import Timer from "../Components/Timer";
import { useNavigate } from "react-router-dom";
import "../Styles/TestForm.css";
import axios from "axios";
import userService from "../Services/service.js";


const TestPage = ({ testName }) => {
  const [questions, setQuestions] = useState([]);
  const [marks, setMarks] = useState(0);
  const [test,setTest] = useState({});
  const [tests,setTests] = useState([]);
  const [max, setMax] = useState(0);
  
  const testID = window.localStorage.getItem("TEST_ID")

  const getQuestions = () => {
  

    userService.getAllTests()
      .then((res) => {
        setTests(res.data.tests);
        // console.log(res.data.tests);
 
      })
      .catch((error) => {
        console.log(error);
      });

      console.log(tests.find(test => test._id === testID))
      setTest({
         id : "123",
         test_name: "DA",
         test_date: "2024-05-31",
         questions: [
             {
                 question: "Who is motta",
                 options: [
                     "1",
                     "2",
                     "3",
                     "4"
                 ],
                 answer: "2"
             },
             {
                 question: "aaran motta",
                 options: [
                     "1",
                     "2",
                     "3",
                     "4"
                 ],
                 answer: "2"
             }
         ]
     })

     
    };
    
    useEffect(() => {
      getQuestions();
    }, []);
    
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleOptionChange = (e, questionIndex) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[questionIndex] = {
        questionIndex: questionIndex,
        value: e.target.value,
      };
      setSelectedOptions(newSelectedOptions);
      //console.log(selectedOptions, "selectedOptions");
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setMax(test.questions.length)
      
      selectedOptions.forEach((item) => {
        if (item.value === questions[item.questionIndex].answer) {
        console.log("Correct");
        setMarks(marks + 1);
      } else {
        console.log("Incorrect");
      }

      // axios
      //   .post("www.google.com", { marks: marks })
      //   .then((res) => {
      //     console.log(res.data, "marks");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // RETURN TO BACKEND
      // MARKS
    });
    navigate("/assessment");
  };

  return (
    <div className="testFormContainer">
      <div className="heading">
        <p>{test.test_name}</p>
        <Timer />
      </div>

      <List
        itemLayout="horizontal"
        dataSource={test.questions}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={index + 1 + "." + item.question}
              description={
                <Radio.Group
                  id={`question-${index}`} // Add a unique ID to the form field element
                  onChange={(e) => handleOptionChange(e, index)}
                >
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
      <div className="testSubmit">
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default TestPage