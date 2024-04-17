import React, { useEffect, useState } from "react";
import { List, Radio, Button } from "antd";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import "../Styles/TestForm.css";
import axios from "axios";

const TestForm = ({ testName }) => {
  const [questions, setQuestions] = useState([]);
  const [marks, setMarks] = useState(0);

  const getQuestions = () => {
    axios
      .get("https://661434ae2fc47b4cf27be0bb.mockapi.io/testPaper")
      .then((res) => {
        setQuestions(res.data);
        // console.log(questions, "questions");
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
    //console.log(selectedOptions, "selectedOptions");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
  );
};
export default TestForm;
