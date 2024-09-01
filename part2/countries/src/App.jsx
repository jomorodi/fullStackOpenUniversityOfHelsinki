import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import CountryRequest from './service/CountryRequest'
import DisplayCountries from './DisplayCountries'


function App() {
  const [searchWord, setSearchWord] = useState('')
  const [countries, setCountries] = useState([])
  useEffect(() => {
    let prom = CountryRequest.getAll()
    prom.then ((requestData) =>{setCountries(requestData);}  )
    
  },[])
  const handleSubmit = (event) => {undefined}
  const handleOnChange = (event) => {
   setSearchWord(event.target.value) 
  }
  return (
    <>
     <Form handleSubmit={handleSubmit} handleOnChange={handleOnChange} searchWord={searchWord}/>
     <DisplayCountries countries={countries} searchWord={searchWord} />
          
    </>
  )
}

export default App
