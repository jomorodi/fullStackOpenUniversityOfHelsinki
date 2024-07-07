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

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)



  let header1 = "give feedback" ;
  let header2 = "statistics"
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const handleGoodClick = () => setGood(good + 1) ;
  const handleNeutralClick = () => setNeutral (neutral + 1) ;
  const handleBadClick = () => setBad (bad + 1) ;
  const handleAnecdoteClick = () => setSelected (getRandomIntInclusive(0, anecdotes.length))


  return (
    <div>
      <div>
      {anecdotes[selected]}
      </div>
    <Button onClick={handleAnecdoteClick} text={"next anecdote"} />
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
