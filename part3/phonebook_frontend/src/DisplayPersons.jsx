import Person from "./Person"

const DisplayPersons = ({persons}) => {

    return <ul>{ persons.map ((person) => <Person key={person.name} person={person}/>)}</ul>
  }



export default DisplayPersons
