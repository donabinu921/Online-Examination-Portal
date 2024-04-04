import React from 'react'
import TestForm from '../Components/TestForm'
import '../Styles/TestPage.css'
import {Button} from "antd";
import CountDown from '../Components/Timer'
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/assessment");
  }

  return (
    <div className='testPage'>
      <div className='heading'>
      <p>FIRST INTERNAL</p>
      <CountDown />
      </div>
      <TestForm />
      <div className='testSubmit'>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default TestPage