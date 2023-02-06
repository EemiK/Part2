import { useState, useEffect } from 'react'
import getAll from './services/countries'


const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [search])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filtered =
    countries
      .filter(countrie => {
        countrie
          .name
          .common
          .toLowerCase()
          .includes(search)
      })

  const mapped =
    filtered.length > 10
      ?
      <div>Too many matches, specify another filter</div>
      :
      filtered.map(c => <div>{c.name.common}</div>)

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
      <div>{mapped}</div>
    </div>
  )
}

export default App
