import { useState, useEffect } from 'react'
import getAll from './services/countries'
import Country from './components/Country'
import Only from './components/Only'
import Showing from './components/Showing'


const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [show, setShow] = useState([])

  useEffect(() => {
    getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setShow([])
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

  const handleButtonChange = (name) => {
    !show.includes(name)
      ?
      setShow(show.concat(name))
      :
      setShow(show.filter(c => c !== name))
  }

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
          show.includes(c.name.common)
            ?
            <div>
              <Country
                country={c}
                buttonHandler={() => handleButtonChange(c.name.common)}
                key={filtered.indexOf(c)}
              />
              <Showing
                country={c}
              />
            </div>
            :
            <Country
              country={c}
              buttonHandler={() => handleButtonChange(c.name.common)}
              key={filtered.indexOf(c)}
            />
        )
      )
    }
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
      <div>
        {countriesToShow()}
      </div>
    </div>
  )
}

export default App
