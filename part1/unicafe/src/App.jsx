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



function StatisticLine ({text , value, unit})

{

  return <tr><td> {text} </td><td> {value} {unit} </td></tr> 

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
    <table>
    <tbody>
    <StatisticLine text={'good'} value={good} />
    <StatisticLine text={"neutral"} value={neutral} />
    <StatisticLine text={"bad"} value={bad} />
    <StatisticLine text={"all"} value={total} />
    <StatisticLine text={"average"} value={averageResult} />
    <StatisticLine text={"positive"} value={positive} unit={"%"}/>
    </tbody>
    </table>
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
