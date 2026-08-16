import { useEffect, useState } from "react"
import "./App.css";


function App(){
  const [timer,setTimer]=useState(0);
  const [running,setRunning]=useState(false)
  const [data,setData]=useState([])
   let interval;
  useEffect(()=>{
    if(running){
     interval= setInterval(()=>{
        setTimer(pre=>pre+1)
      },1000)}
    return()=>clearInterval(interval)
  },[running])
 
  function start(){
setRunning(true)
  }
  function stop(){
setRunning(false)
  }
  function reset(){

    setTimer(0);
    setRunning(false);
    setData([])
  }
function lap(){
setData([...data,timer])

}


  return(<>
  <div>

    <h1>Stop Watch</h1>
    <h1>{timer}</h1>
    <button onClick={start}>start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    <button onClick={lap}>Lap</button>

    {data.length==0?<h1>No data </h1>:(
      <ol>
      {data.map((val,index)=>(
        <li key={index}>Lap:{val}</li>
      ))}

      </ol>
    )}
  </div>
  
  </>
  )

}export default App