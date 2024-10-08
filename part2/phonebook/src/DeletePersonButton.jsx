import personRequest from './service/personRequest'
import personContext from './personContext'
import { useContext } from 'react'
const DeletePersonButton = ({person}) => {  

const {persons , setPersons, setErrorMessage} = useContext (personContext) ;
const handleOnClick = () => {

    

    if (window.confirm(`Delete ${person.name} ?`)) {
        let promise = personRequest.deletePerson (person.id)
              
        let personsCopy = persons.filter ((n) => person.id !== n.id );
        
        delete persons.find(n => n.id === person.id) ;
        
        setPersons(personsCopy) ;
        //setErrorMessage(`Information of ${person.name} has already been removed from server`);
        setErrorMessage(`Deleted  ${person.name} `);
}
      }
      


    return <button onClick={handleOnClick} > delete </button>
}

export default DeletePersonButton