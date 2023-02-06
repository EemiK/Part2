import { useState, useEffect } from 'react'
import getAll from './services/countries'
import Filter from './components/Filter'


const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

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
