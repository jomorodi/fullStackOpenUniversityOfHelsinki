
import Weather from "./Weather";
import { v4 as uuidv4 } from 'uuid';

const DisplayCountry = ({country}) => {
return (<>
<h2>{country.name.common}</h2>
<div>
<p>capital {country.capital} 
<br/>
area {country.area} 
</p>

</div>
<div>
<h3>Languages: </h3>
       <ul> { Object.entries(country.languages).map(([keys, value]) => {return <li key={uuidv4()}>{value}</li> ;})} </ul>
       <img
  src={country.flags.png}
  alt={`${country.name.common} flag`} />
  </div>
    <Weather cityName={country.capital} />
</>)
}



export default  DisplayCountry