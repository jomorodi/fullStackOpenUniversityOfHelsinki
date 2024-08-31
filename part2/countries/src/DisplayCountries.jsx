
const DisplayCountries = ({countries, searchWord}) => {
    
let filteredCountries = countries.filter((country) => { return country.name.common.toLowerCase().includes(searchWord.toLowerCase())});

if (filteredCountries.length == 0 && searchWord.length > 0)
{
    return <div>no country match the curent filter</div>
}
if (filteredCountries.length > 10 && searchWord.length > 0)
{
    return <div>Too Many matches, specify another filter </div>
}
if (filteredCountries.length>1 && filteredCountries.length <= 10 && searchWord.length > 0)
{
    
    return <ul style={{listStyleType:'none', margin:0, padding:0}}>{filteredCountries.map((country) => { return <li>{country.name.common}</li>;})}</ul>
}
if (filteredCountries.length === 1 && searchWord.length > 0)
{
    
    console.log (filteredCountries[0])
    return <>
    <h2>{filteredCountries[0].name.common}</h2>
    <div>
    <p>capital {filteredCountries[0].capital} 
    <br/>
    area {filteredCountries[0].area} 
    </p>
    
    </div>
    <div>
        <h3>Languages: </h3>
       <ul> { Object.entries(filteredCountries[0].languages).map(([keys, value]) => {return <li>{value}</li> ;})} </ul>
       <img
  src={filteredCountries[0].flags.png}
  alt="Grapefruit slice atop a pile of other slices" />
    </div>
    </>
}
}

export default DisplayCountries