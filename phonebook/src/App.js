import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    !persons.map(person => person.name).includes(newName)
      ?
      personService
        .create(newPerson)
        .then(returnPerson => {
          setPersons(persons.concat(returnPerson))
        })
      : alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
  }

  const deletePersonFrom = (id) => {
    const person = persons.find(n => n.id === id)

    noteService
      .deletePerson(id).then(returnPerson => {
        setPersons(persons.map(person => person.id !== id))
      })
  }

  const personsToShow = persons.filter(person => (person.name.toLowerCase().includes(filter.toLowerCase())))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handlers={[handleNameChange, handleNumberChange]}
        submit={addPerson}
      />
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <Person
          person={person}
          deletePerson={() => deletePersonFrom(person.id)}
          key={person.id}
        />
      )}
    </div>
  )
}

export default App
