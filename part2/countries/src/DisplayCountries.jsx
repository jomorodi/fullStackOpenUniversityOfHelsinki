import { useState } from "react";
import DisplayCountry from "./DisplayCountry";
import ConditionalDisplayCountry from "./ConditionalDisplayCountry";
import { v4 as uuidv4 } from 'uuid';

const DisplayCountries = ({countries, searchWord}) => {
    
    const [isShown, setIsShown] = useState(null)
let filteredCountries = countries.filter((country) => { return country.name.common.toLowerCase().includes(searchWord.toLowerCase())});
const handleButtonClick = (index, filteredArrlength) => {
    // just flip the only boolean value of the index for which the button was cliked
    if (!isShown)
    {
        // the first time initialize the showState boolean array
        let showStateArray = [];
        //initializing the array to
        for (let i =0; i < filteredArrlength; i++) showStateArray.push(false);
        setIsShown(showStateArray);
    }else
    {
    if (isShown[index]){
        setIsShown(isShown.map((elem ,i) =>{
            if (index === i ) return false
            else return isShown[i]
        }))
    }
    else{
        setIsShown(isShown.map((elem ,i) =>{
            if (index === i ) return true
            else return isShown[i]
        }))

    }
}
}
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
   
    return <ul style={{listStyleType:'none', margin:0, padding:0}}>
        {filteredCountries.map((country, index) => { 
            return (<li  key={uuidv4()}>
                {country.name.common} 
                <button onClick={() => handleButtonClick(index , filteredCountries.length)}>show</button>
                <ConditionalDisplayCountry country={filteredCountries[index]} show={isShown? isShown[index]: false} />
                </li>);})}</ul>
}
if (filteredCountries.length === 1 && searchWord.length > 0)
{
    return <DisplayCountry country={filteredCountries[0]} />
}
}

export default DisplayCountries