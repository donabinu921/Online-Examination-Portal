import React from 'react'
import TestForm from '../Components/TestForm'
import '../Styles/TestPage.css'
import Buttons from '../Components/Buttons'
import CountDown from '../Components/Timer'

const TestPage = () => {
  return (
    <div className='testPage'>
      <div className='heading'>
      <p>FIRST INTERNAL</p>
      <CountDown />
      </div>
      <TestForm />
      <div className='testSubmit'>
      <Buttons name={"Submit"} />
      </div>
    </div>
  )
}

export default TestPage