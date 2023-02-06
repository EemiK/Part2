import { useState, useEffect } from 'react'
import getAll from './services/countries'
import Filter from './components/Filter'


const App = () => {
  const [search, setSearch] = useState('sw')
  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filtered =
    countries
      .filter(countrie =>
        countrie
          .name
          .common
          .toLowerCase()
          .includes(search)
      )

  console.log(filtered)

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
      <div>
        <Filter countries={filtered} />
      </div>
    </div>
  )
}

export default App
