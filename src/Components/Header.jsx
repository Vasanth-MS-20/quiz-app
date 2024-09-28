import React, { useEffect, useState } from 'react'
import Content from './Content'
import myData from '../assets/data'

const Header = () => {
     
    const [qno, setQno] = useState(0)   
    const [qn, setQn] = useState(myData[qno].question)  
    const [options, setOptions] = useState(myData[qno].options) 
    const [timer, setTimer] = useState(0)
    const [toggleWindow, setToggleWindow] = useState(true)
    const [result, setResult] = useState(0)

    useEffect(()=>{
        setQn(myData[qno].question)
        setOptions(myData[qno].options)
    },[qno])

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(timer + 1)
            if(timer === 10){
                setTimer(0)
                if(qno < 4){
                    setQno(qno + 1)
                }
                else{
                    setToggleWindow(false)
                }
            }
        },1000)

        return ()=>{
            clearInterval(interval)
        }
    },[timer, qno])

  return (
    <>
        {myData && <Content
        myData = {myData}
        qno={qno}
        qn={qn}
        options={options}
        timer={timer}
        result={result}
        toggleWindow={toggleWindow}
        setQno={setQno}
        setResult={setResult}
        setTimer={setTimer}
        setToggleWindow={setToggleWindow}
        />}
    </>
  )
}

export default Header