const Only = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <strong>languages:</strong>
            <ul>
                {
                    country
                        .languages
                        .map((t, l) => <li>{l}</li>)
                }
            </ul>
            <img src={country.flag.png} />
        </div>
    )
}

export default Only