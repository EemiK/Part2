import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    !persons.map(person => person.name).includes(newName)
      ? setPersons(persons.concat(newPerson))
      : alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
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
        <Person key={person.id} person={person} />
      )}
    </div>
  )
}

export default App
