import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
const  [currentTime, setCurrentTime]  = useState(new Date());
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  },1000);
  return () => clearInterval(timer);
},[]);



const formmatTimeZero = (num) => {
  return num < 10 ? `0${num}` : `${num}`;
}

const fomatHour = (hour ) => {
  return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
}
  return (
    <>
     <div className="digital-clock">
     <h1>Digital Clock</h1>
     <div className="time">{formmatTimeZero(fomatHour(currentTime.getHours()))}
     :{formmatTimeZero(currentTime.getMinutes())}:
     {formmatTimeZero(currentTime.getSeconds())}
     {currentTime.getHours() >=12 ? " PM" : " AM"}
     </div>

    
    <p>{currentTime.toLocaleDateString()}</p>
     </div>
     
    </>
  )
}

export default App
