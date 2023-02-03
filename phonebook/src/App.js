import { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setNewMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initalPersons => {
        setPersons(initalPersons)
      })
  }, [])

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
          setNewMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
          setPersons(persons.concat(returnPerson))
        })
      :
      window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)
        ?
        personService
          .update(persons.find(n => n.name === newName).id, newPerson)
          .then(response => {
            setNewMessage(
              `Number of ${newName} has been changed`
            )
            setTimeout(() => {
              setNewMessage(null)
            }, 5000)
            setPersons(persons.map(person => person.name !== newName ? person : response))
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
        :
        console.log('cancelled number change')
    setNewName('')
    setNewNumber('')
  }

  const deletePersonFrom = (id) => {
    const person = persons.find(n => n.id === id)
    window.confirm(`Delete ${person.name} ?`)
      ?
      personService
        .deletePerson(id).then(returnPerson => {
          setPersons(persons.filter(person => person.id !== id))
        })
      :
      console.log('cancelled deletion')
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
      <Notification message={message} />
      <Error message={errorMessage} />
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
