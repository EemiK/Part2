import { useState, useEffect } from 'react'
import getAll from './services/countries'
import Country from './components/Country'
import Only from './components/Only'


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

  const countriesToShow = () => {
    if (filtered.length > 10) {
      return (
        <div>Too many matches, specify another filter</div>
      )
    } else if (filtered.length === 1) {
      return (
        <Only country={filtered[0]} />
      )
    } else {
      return (
        filtered.map(c =>
          <Country
            country={c}
            key={filtered.indexOf(c)}
          />
        )
      )
    }
  }

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
        {countriesToShow()}
      </div>
    </div>
  )
}

export default App
