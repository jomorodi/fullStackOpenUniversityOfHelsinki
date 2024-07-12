import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const DisplayPersons = ({persons}) => {

  return <ul>{ persons.map ((person) => <li key={person.name}> {person.name} {person.number} </li>)}</ul>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('') ;
  const [newNumber, setNewNumber] = useState('') ;
  const [filterWord, setFilterWord] = useState('');
  const [filteredPersonArray , setFilteredPersonArray] = useState([]) ;
  
  const handleFormSubmit = (event) => {
    event.preventDefault() ;
    
    if (! (persons.filter ((person) => person.name === newName ).length === 0) ) 
    {
      // checks if new name is on the list 
      alert (`${newName} is already added to the phonebook`)

    }
    else
    {
    setPersons (persons.concat({name: newName, number: newNumber }));
    setNewName("");
    setNewNumber('');
    }
    } ;
  const handleNameInputChange = (event) => {setNewName(event.target.value)};
  const handleNumberInputChange = (event) => {setNewNumber(event.target.value)}
  const handleSearchFilterChange = (event) => {
    let word = event.target.value ;
    setFilterWord(word);
    
    let arrayFiltered = persons.filter((person) => person.name.toLowerCase().includes(word.toLowerCase()) );
    
    setFilteredPersonArray (arrayFiltered);
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleSearchFilterChange} value={filterWord}/>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleNameInputChange} value={newName}/>
          
        </div>
        <div>
          number: <input onChange={handleNumberInputChange} value={newNumber} />
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { ! filterWord ? <DisplayPersons persons={persons} /> : <DisplayPersons persons={filteredPersonArray} />}
    </div>
  )
}

export default App
