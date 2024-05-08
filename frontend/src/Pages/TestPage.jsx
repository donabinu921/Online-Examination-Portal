import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { List, Radio, Button } from "antd"
import Timer from "../Components/Timer"
import userService from "../Services/service.js"
import { toast } from "react-toastify"


const TestPage = ({ testName }) => {
  const [marks, setMarks] = useState(0)
  const [test, setTest] = useState({})
  const [max, setMax] = useState(0)
  const [testAttend, setTestAttend] = useState(false)
  const testID = window.localStorage.getItem("TEST_ID")
  const [selectedOptions, setSelectedOptions] = useState([])


  const navigate = useNavigate()

  const getQuestions = () => {
    userService
      .getAllTests()
      .then(res => {
        const tests = res.data.tests
        const _test = tests.find(test => test._id === testID)
        setTest(_test)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getQuestions()
    testAttended()
  }, [])

  const handleOptionChange = (e, questionIndex) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionIndex] = {
      questionIndex: questionIndex,
      value: e.target.value,
    }
    setSelectedOptions(newSelectedOptions)
  }

  const findMarks = () => {

    let mark = 0
    selectedOptions.forEach(item => {
      const question = test.questions[item.questionIndex]

      if (item.value === question.answer) {
        mark += 1 // Increment marks by 1 for each correct answer
      } else {
        // Optionally, you can handle incorrect answers here
        console.log("Incorrect answer for question:", question.question)
      }
    })
    setMarks(mark) // Update marks state
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMax(test.questions.length)
    findMarks()

    const result = {
      test_id: testID,
      student_id: window.localStorage.getItem("USER_ID"),
      mark: marks,
      max_mark: max,
    }

    userService
      .postResults(result)
      .then(res => {
        console.log(res)
        toast.success("Test submitted successfully!")
        navigate("/assesment")
      })
      .catch(error => {
        console.log(error)
        toast.error("Error submitting test")
      })
  }

  const testAttended = () => {
    userService.getResults().then(res => {
      const _res = res.data.test_results.filter(
        result =>
          result.student_id === window.localStorage.getItem("USER_ID") &&
          result.test_id === testID
      )
      if (_res.length > 0) {
        setTestAttend(true)
      }
    })
  }
  return (
    <>
      {!testAttend ? (
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
                      onChange={e => handleOptionChange(e, index)}
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
      ) : (
        <div>
          <h1>Test has already attended</h1>
        </div>
      )}
    </>
  )
}

export default TestPage
