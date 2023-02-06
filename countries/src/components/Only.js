const Only = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>
                <strong>languages:</strong>
            </h3>
            <div>
                <img src={country.flags.png} />
            </div>
        </div>
    )
}

export default Only