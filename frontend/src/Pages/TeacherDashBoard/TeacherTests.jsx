
import React,{ useState } from "react";
import { Breadcrumb, Layout, theme } from "antd";
import { Button, Input, Select, DatePicker } from "antd";
import "../../Styles/CreateTestForm.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import NavBar from "../../Components/NavBar";
import userService from "../../Services/service.js";
import "../../Styles/TeacherTests.css";
const { Header, Content, Sider } = Layout;
const { Option } = Select;


const TeacherTests = () => {

  const USER = JSON.parse(window.localStorage.getItem("USER"));
  const USER_ID = window.localStorage.getItem("USER_ID")

  const [collapsed, setCollapsed] = useState(false);


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const navigate = useNavigate()

  const [testName, setTestName] = useState("")
  const [scheduledDate, setScheduledDate] = useState("")
  const [questions, setQuestions] = useState([])
  const [createMode, setCreateMode] = useState(false)

  const addQuestion = () => {
    const newQuestion = {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    }
    setQuestions([...questions, newQuestion])
  }

  const handleTestNameChange = e => {
    setTestName(e.target.value)
  }

  const handleDateChange = (date, dateString) => {
    setScheduledDate(dateString)
  }

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index].question = value
    setQuestions(updatedQuestions)
  }

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].options[optionIndex] = value
    setQuestions(updatedQuestions)
  }

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const updatedQuestions = [...questions]
    updatedQuestions[questionIndex].correctAnswer =
      updatedQuestions[questionIndex].options[value]
    setQuestions(updatedQuestions)
  }

  const disabledDate = current => {
    // Can not select days before today and today
    return current && current < moment().endOf("day")
  }

  const handleSubmit = e => {
    e.preventDefault()
    // console.log("Test Name: ", testName);
    // console.log("Scheduled date: ", scheduledDate);

    const test = {
      teacher_id: USER_ID,
      test_name: testName,
      test_date: scheduledDate,
      questions: questions.map((question, index) => ({
        question: question.question,
        options: question.options,
        answer: question.correctAnswer,
      })),
    }

    userService
      .createTest(test)
      .then(res => {
        console.log(res, "RESPP")
        toast.success("Test Created Successfully")
      })
      .catch(error => {
        console.log(error)
        toast.error("Test Creation Failed")
      })

    setCreateMode(false)
  }

  return (
    <div className="teacher-home">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={value => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <NavBar num={2} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              {/*  Home  */}

              <Breadcrumb>
                <h1>Hello Prof. {USER}!</h1>
              </Breadcrumb>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {!createMode && (
                <Button
                  type="primary"
                  onClick={() => {
                    setCreateMode(true)
                  }}
                >
                  + Create Test
                </Button>
              )}
              {createMode && (
                <div className="create-test-form">
                  <h2>Enter Test Name:</h2>
                  <Input
                    placeholder="Enter test name"
                    value={testName}
                    onChange={handleTestNameChange}
                  />
                  <br />
                  <br />
                  <DatePicker
                    onChange={handleDateChange}
                    disabledDate={disabledDate}
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
                        onChange={e =>
                          handleQuestionChange(index, e.target.value)
                        }
                      />

                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                          <label>
                            Option {optionIndex + 1}:
                            <Input
                              placeholder={`Option ${optionIndex + 1}`}
                              value={option}
                              onChange={e =>
                                handleOptionChange(
                                  index,
                                  optionIndex,
                                  e.target.value
                                )
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
                          onChange={value =>
                            handleCorrectAnswerChange(index, value)
                          }
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
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default TeacherTests
