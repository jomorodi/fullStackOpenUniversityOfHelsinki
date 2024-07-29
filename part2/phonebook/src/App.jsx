import { useState , useEffect, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Persons from './Persons'
import axios from 'axios'
import personRequest from './service/personRequest'
import personContext from './personContext'



const DisplayPersons = ({persons}) => {

  return <ul>{ persons.map ((person) => <li key={person.name}> {person.name} {person.number} </li>)}</ul>
}

//const personContext = createContext(null);

const App = () => {

  useEffect (() => {
    personRequest.getAll ().then(responseData => setPersons (responseData))
    

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
      // checks if new name is on the persons list 

      if (window.confirm(`${newName}  is already added to the phonebook, replace the old number with a new one?`)) {
        
        const person = persons.find(n => n.name === newName) // find the person on the list with the name
        const changedPerson = { ...person, number: newNumber } // change phone number of a copy of the found person
      
        let promise = personRequest.update  (person.id , changedPerson)
        
        promise.then ((responseData) => { 
          setPersons(persons.map(person => person.name !== newName ? person : responseData))
          setNewName("");
          setNewNumber('');
        })
        
        }

    }
    else
    {
      let newPerson = {name: newName, number: newNumber } ;
      personRequest.create(newPerson).then(responseData => {
        setPersons (persons.concat(responseData));
        setNewName("");
    setNewNumber('');

      } )
    
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
    <personContext.Provider value= {{persons , setPersons}} >   
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
    </personContext.Provider>
  ) 

 
}

export default App 
