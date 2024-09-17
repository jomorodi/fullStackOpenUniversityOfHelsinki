import Person from "./Person"
import DisplayPersons from "./DisplayPersons";

  
const Persons = ({persons , filterWord , filteredPersonArray}) => {

    return (<div> { ! filterWord ? <DisplayPersons persons={persons} /> : <DisplayPersons persons={filteredPersonArray} />}</div>);
  }

export default Persons