import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'
import axios from 'axios'



const DisplayPersons = ({persons}) => {

  return <ul>{ persons.map ((person) => <li key={person.name}> {person.name} {person.number} </li>)}</ul>
}

const App = () => {

  useEffect (() => {
    const promise = axios.get('http://localhost:3001/persons')
    promise.then ((response) => { setPersons(response.data) })

   }, [])
  const [persons, setPersons] = useState([]) 
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

      <Filter handleSearchFilterChange={handleSearchFilterChange}  filterWord={filterWord} />

      <h3>Add a new</h3>

      <PersonForm 
        handleFormSubmit = {handleFormSubmit}  handleNameInputChange = {handleNameInputChange}  
        handleNumberInputChange = {handleNumberInputChange} newName = {newName} newNumber = {newNumber}
      />

      <h3>Numbers</h3>

      <Persons persons ={persons} filterWord={filterWord}  filteredPersonArray = {filteredPersonArray} />
    </div>
  ) 

 
}

export default App
