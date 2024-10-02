import React from 'react'

const Content = ({
    myData, 
    qno, 
    qn, 
    options, 
    timer, 
    result, 
    toggleWindow, 
    setQno, 
    setResult, 
    setTimer, 
    setToggleWindow
}) => {
    
    function handleOptions(e){
        if(qno < (myData.length - 1)){
            if(e.target.innerText === myData[qno].correctOption){
                setResult(result + 1)
                setQno(qno + 1)
                setTimer(0)
            }
            setQno(qno + 1)
            setTimer(0)
        }
        else{
            if(e.target.innerText === myData[qno].correctOption){
                setResult(result + 1)
                setQno(0)
                setToggleWindow(false)
                setTimer(0)
            }
            setQno(0)
            setToggleWindow(false)
            setTimer(0)
        }
     }
 
     function handleRestart(){
         setQno(0)
         setResult(0)
         setTimer(0)
         setToggleWindow(true)
     }

  return (
    <>
        <div className="row mt-5">
            <div className="col-sm-5 mx-auto">
                <div className="card" data-bs-theme='dark'>

                    { toggleWindow && <div className="card-body text-center" >
                        <h3 className='text-info'>Question {qno + 1}</h3>
                        <h6 className='mt-3'>{qn}</h6>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3 mb-3">
                            <button className="btn badge bg-primary p-3 rounded-pill d-block" onClick={handleOptions}>{options[0]}</button>
                            <button className="btn badge bg-primary p-3 rounded-pill d-block" onClick={handleOptions}>{options[1]}</button>
                            <button className="btn badge bg-primary p-3 rounded-pill d-block" onClick={handleOptions}>{options[2]}</button>
                            <button className="btn badge bg-primary p-3 rounded-pill d-block" onClick={handleOptions}>{options[3]}</button>
                        </div>
                        <p className='text-muted'>Time Left : <b className='text-warning'>{timer}s</b></p>

                    </div>}

                    {!toggleWindow && <div className="card-body text-center border border-secondary rounded">
                        <h5>Your Score : {result}/{myData.length}</h5>
                        <button className="btn btn-danger mb-1" onClick={handleRestart}>Restart</button>
                    </div>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Content