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

function Statistics ({good , neutral , bad})
{
  let total = good + neutral + bad ;

  let averageResult = total != 0 ? (good*1 + neutral*0 + bad *-1 ) / total : 0 ;

  let positive = total != 0 ? (good/ total) * 100 : 0;
if (good != 0 || neutral !=0 || bad != 0)
{
  return (
    <>
    <Result choice={'good'} value={good} />
    <Result choice={"neutral"} value={neutral} />
    <Result choice={"bad"} value={bad} />
    <Result choice={"all"} value={total} />
    <Result choice={"average"} value={averageResult} />
    <Result choice={"positive"} value={positive} unit={"%"}/> 
    </>
    )

}
else { return <h2>No feedback given</h2>}

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


  return (
    <div>
      <Header text={header1} />
      <div> 
        <Button onClick={handleGoodClick} text ={"good"} />
        <Button onClick={handleNeutralClick} text = {"neutral"} />
        <Button onClick={handleBadClick} text={"bad"} />
      </div>
      <Header text={header2} />
      
        
        <Statistics good={good} neutral={neutral} bad={bad} />
       
    </div>
  )
}

export default App
