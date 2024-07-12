import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const DisplayPersons = ({persons}) => {

  return <ul>{ persons.map ((person) => <li key={person.name}> {person.name} </li>)}</ul>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newName, setNewName] = useState('') ;
  const handleFormSubmit = (event) => {
    event.preventDefault() ;
    
    if (! (persons.filter ((person) => person.name === newName ).length === 0) ) 
    {
      // checks if new name is on the list 
      alert (`${newName} is already added to the phonebook`)

    }
    else
    {
    setPersons (persons.concat({name: newName }));
    setNewName("");
    }
    } ;
  const handleInputChange = (event) => {setNewName(event.target.value)};

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleInputChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} />
    </div>
  )
}

export default App
