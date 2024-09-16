const express = require ("express")
const app = express()
app.use(express.json()) // using midleware that parses request json body into js object

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get("/api/persons", (request, response) => {
response.json(persons)
})

app.get("/api/info", (request, response) =>
{
  response.send(`<p>Phonebook has info for ${persons.length} ${persons.length > 1 ? "people" : "person" }</p>
       <p> ${new Date().toString()} </p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
 response.status(204).end()
})


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const generateId = () => {

  const max = 100000000000000
  const personId =  getRandomInt(max)
  while (persons.find(person => person.id === personId))
  {
    // check if the random id already exist if yes generate another random
    //id to prevent id collision
    personId =  getRandomInt(max);
  }
  return personId
 
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(request)
  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number is  missing' 
    })
  }

  if (persons.find(person => person.name === body.name))
  {
    return response.status(409).json({ 
      error: 'name must be unique'  
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
