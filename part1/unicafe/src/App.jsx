import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header ({text})
{
return <div> <h1> {text} </h1> </div>

}

function Button ({onClick , text})
{
return <button onClick= {onClick} >  {text} </button>

}

function Result ({choice, value , unit})

{
return <h1> {choice} {value} {unit} </h1>

}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => setGood(good + 1) ;
  const handleNeutralClick = () => setNeutral (neutral + 1) ;
  const handleBadClick = () => setBad (bad + 1) ;

  let header1 = "give feedback" ;
  let header2 = "statistics"
  let total = good + neutral + bad ;

  let averageResult = (good*1 + neutral*0 + bad *-1 ) / total ;

  let positive = (good/ total) * 100 ;

  return (
    <div>
      <Header text={header1} />
      <div> 
        <Button onClick={handleGoodClick} text ={"good"} />
        <Button onClick={handleNeutralClick} text = {"neutral"} />
        <Button onClick={handleBadClick} text={"bad"} />
      </div>
      <Header text={header2} />
      
        <Result choice={'good'} value={good} />
        <Result choice={"neutral"} value={neutral} />
        <Result choice={"bad"} value={bad} />
        <Result choice={"all"} value={total} />
        <Result choice={"average"} value={averageResult} />
        <Result choice={"positive"} value={positive} unit={"%"}/>
      
    </div>
  )
}

export default App
