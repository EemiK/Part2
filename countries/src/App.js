import { useState, useEffect } from 'react'
import countrieService from './services/countries'


const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    countrieService
      .getAll()
      .then(countries => {
        (countries.length > 10)
          ?
          setMessage('Too many matches, specify another filter')
          :
          setCountries(countries)
      })
  }, [search])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <form>
        <div>find countries
          <input
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default App
