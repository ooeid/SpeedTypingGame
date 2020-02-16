import React, {useEffect,useState} from 'react';
import './App.css';

function App() {
const [text,setText] = useState('')
const [time,setTime] = useState(10)
const [isTime,setIsTime] = useState(false)
const [wordCount,setWordCount] = useState(0)

let chnageHnadler = (e) => {
const {value} = e.target 
setText(value)
}

let count = (text) => {
  const wordArry = text.trim().split(" ")
  return wordArry.filter(word => word !== "").length
}

let startGame = () => {
  setIsTime(true)
  setTime(10)
  setText('')

}

useEffect(() => {
    if( time > 0 && isTime === true){
      setTimeout(() => {
        setTime(time => time - 1)
      }, 1000)
    } else if(time === 0){
      setIsTime(false)
      setWordCount(count(text))
    }
      
    

  } , [time,isTime])

console.log(text)

  return (
    <div className="App">
    <h1> How Fast you can type!? </h1>

      <textarea onChange={chnageHnadler} value={text} disabled={!isTime} />

      <h4> Time Remaining {time}</h4>

      <button onClick={() => startGame()} 
      disabled={isTime}> {/* if isTime is true diable button */}
      
       Let's Start </button>

      <h1> Your word count {wordCount} </h1>



    </div>
  );
}

export default App;
