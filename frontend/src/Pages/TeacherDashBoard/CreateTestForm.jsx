import React, { useState } from "react";
import { Button, Input, Select } from "antd";
import "../../Styles/CreateTestForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const { Option } = Select;

function CreateTestForm() {
  const [testName, setTestName] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleTestNameChange = (e) => {
    setTestName(e.target.value);
    console.log(`Test Name: ${e.target.value}`);
  };

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].question = value;
    setQuestions(updatedQuestions);
    console.log(`Question ${index + 1}: ${value}`);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
    console.log(
      `Option ${optionIndex + 1} for Question ${questionIndex + 1}: ${value}`
    );
  };

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctAnswer =
      updatedQuestions[questionIndex].options[value];
    setQuestions(updatedQuestions);
    console.log(`Correct Option for Question ${questionIndex + 1}: ${value}`);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = questions.map((question, index) => ({
      name: testName,
      question: question.question,
      options: question.options,
      answer: question.correctAnswer,
    }));
    console.log(test);
    //navigate('/teacher-tests');
    toast.success("Test Created Successfully");
  };

  return (
    <div className="create-test-form">
      <h2>Enter Test Name:</h2>
      <Input
        placeholder="Enter test name"
        value={testName}
        onChange={handleTestNameChange}
      />
      <br />
      <br />
      <Button type="primary" onClick={addQuestion}>
        Add a Question
      </Button>
      <hr />

      {questions.map((question, index) => (
        <div key={index}>
          <h4>Question {index + 1}</h4>
          <Input
            placeholder="Enter your question"
            value={question.question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
          />

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>
                Option {optionIndex + 1}:
                <Input
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(index, optionIndex, e.target.value)
                  }
                />
              </label>
              <br />
            </div>
          ))}
          <br />
          <label>
            Correct Answer:
            <Select
              style={{ width: 120 }}
              value={question.correctAnswer}
              onChange={(value) => handleCorrectAnswerChange(index, value)}
            >
              <Option value="0">Option 1</Option>
              <Option value="1">Option 2</Option>
              <Option value="2">Option 3</Option>
              <Option value="3">Option 4</Option>
            </Select>
          </label>
          <hr />
        </div>
      ))}
      <Button
        onClick={handleSubmit}
        className="test-submit"
        type="primary"
        to="/teacher-tests"
      >
        Submit
      </Button>
    </div>
  );
}

export default CreateTestForm;
