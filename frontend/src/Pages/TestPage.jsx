import React from 'react'
import TestForm from '../Components/TestForm'
import '../Styles/TestPage.css'
import {Button} from "antd";
import CountDown from '../Components/Timer'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TestPage = () => {

  const [results, setResults] = useState([]);
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(e.target.value)
    navigate("/assessment");
  }

  return (
    <div className='testPage'>
      <div className='heading'>
      <p>FIRST INTERNAL</p>
      <CountDown />
      </div>
      <TestForm setResults={setResults} />
      <div className='testSubmit'>
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default TestPage