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
import Notification from './Notification'




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
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorState, setErrorState] = useState(false);
  useEffect(
    () => {
      let timeoutID = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timeoutID);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [errorMessage]
  );
  const handleFormSubmit = (event) => {
    event.preventDefault() ;
        
    if (! (persons.filter ((person) => person.name === newName ).length === 0) ) 
    {
      // checks if new name is on the persons list if yes then the filter list length would not equal 0
      //

      if (window.confirm(`${newName}  is already added to the phonebook, replace the old number with a new one?`)) {
        
        const person = persons.find(n => n.name === newName); // find the person on the list with the name
        const changedPerson = { ...person, number: newNumber }; // change phone number of a copy of the found person
      
        let promise = personRequest.update  (person.id , changedPerson);
        
        promise.then ((responseData) => { 
          setPersons(persons.map(person => person.name !== newName ? person : responseData))
          setNewName("");
          setNewNumber('');
          //clear the name number field, show customised error mesaage, clear the 
          //customized error message
          setErrorMessage(`Updated ${responseData.name} phone number from ${person.number} to ${changedPerson.number}`);
          /* let timeoutID = setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          clearTimeout(timeoutID); */
        }).catch(error => {
          setErrorState(true);
          setErrorMessage(`Information of ${person.name} has already been removed from server`);
          setNewNumber(''); // should one clear the old typeed number?
          personRequest.getAll ().then(responseData => setPersons (responseData));
          
        })

    }}
    else
    {
      //this else handle the case when the filtered list length == 0
      let newPerson = {name: newName, number: newNumber } ;
      personRequest.create(newPerson).then(responseData => {
        setPersons (persons.concat(responseData));
        setNewName("");
    setNewNumber('');
    // code update error message and set a timeout that wipes
        setErrorMessage(`Added ${responseData.name}`);
      
      } )
    
    }
    }
  
  const handleNameInputChange = (event) => {setNewName(event.target.value)};
  const handleNumberInputChange = (event) => {setNewNumber(event.target.value)};
  const handleSearchFilterChange = (event) => {
    let word = event.target.value ;
    setFilterWord(word);
    
    let arrayFiltered = persons.filter((person) => person.name.toLowerCase().includes(word.toLowerCase()) );
    
    setFilteredPersonArray (arrayFiltered);
  };

  return (
    <personContext.Provider value= {{persons , setPersons, setErrorMessage}} >   
    <div>
      <h2>Phonebook</h2>
      <Notification errorState={errorState} message={errorMessage} />
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
