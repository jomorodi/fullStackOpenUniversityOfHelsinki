
import DeletePersonButton from "./DeletePersonButton"
const Person = ({person}) => 
{

    return <li> {person.name} {person.number} <DeletePersonButton person={person} /> </li>

}

export default Person