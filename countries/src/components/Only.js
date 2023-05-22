const Element = ({ value }) => {
    return (
        <li>
            {value}
        </li>
    )
}

const Only = ({ country }) => {

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>
                <strong>languages:</strong>
            </h3>
            <ul>
                {Object.values(country.languages)
                    .map(l =>
                        <Element
                            value={l}
                            key={Object.values(country.languages).indexOf(l)}
                        />
                    )
                }
            </ul>
            <div>
                <img src={country.flags.png} alt={'flag'} />
            </div>
        </div>
    )
}

export default Only