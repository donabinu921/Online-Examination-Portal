import "../Styles/TestPage.css";
import React, { useEffect, useState } from "react";
import { List, Radio, Button } from "antd";
import Timer from "../Components/Timer";
import { useNavigate } from "react-router-dom";
import "../Styles/TestForm.css";
import axios from "axios";
import userService from "../Services/service.js";
import { toast } from "react-toastify";

const TestPage = ({ testName }) => {
  const [marks, setMarks] = useState(0);
  const [test, setTest] = useState({
    test_id: "123",
    test_name: "Andi Kundi",
    test_date: "2024-05-31",
    questions: [
      {
        question: "Who is motta",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "aaran motta",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "aaran motta",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "aaran motta",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
    ],
  });

  const [max, setMax] = useState(0);
  const testID = window.localStorage.getItem("TEST_ID");

  const getQuestions = () => {
    userService
      .getAllTests()
      .then((res) => {
        const tests = res.data.tests;

        const _test = tests.find((test) => test._id === testID);
        setTest(_test);
      })
      .catch((error) => {
        console.log(error);
      });
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
    findMarks();
    //console.log(selectedOptions, "selectedOptions");
  };

  const findMarks = () => {
    let mark = 1;
    selectedOptions.forEach((item) => {
      const question = test.questions[item.questionIndex];
      if (item.value === question.answer) {
        mark += 1; // Increment marks by 1 for each correct answer
      } else {
        // Optionally, you can handle incorrect answers here
        console.log("Incorrect answer for question:", question.question);
      }
    });
    setMarks(mark); // Update marks state
    console.log("Marks:", mark);
  };
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Reset marks to 0
    e.preventDefault();
    setMax(test.questions.length);
    findMarks();
    // navigate("/assessment");

    const result = {
      test_id: testID,
      student_id: window.localStorage.getItem("USER_ID"),
      mark: marks+1,
      max_mark: max,
    };

    console.log("Result");

    userService
      .postResults({
        test_id: testID,
        student_id: window.localStorage.getItem("USER_ID"),
        mark: marks,
        max_mark: max,
      })
      .then((res) => {
        console.log(res);
        navigate("/assessment");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error submitting test");
      });
  };

  useEffect(() => {
  }, [marks]); // useEffect will run whenever marks state changes

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
              title={`${index + 1}. ${item.question}`}
              description={
                <Radio.Group
                  id={`question-${index}`}
                  onChange={(e) => handleOptionChange(e, index)}
                  value={
                    selectedOptions[index]
                      ? selectedOptions[index].value
                      : undefined
                  }
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
  );
};

export default TestPage;
