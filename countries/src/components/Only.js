const Only = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <div>
                <strong>languages:</strong>
            </div>
            <div>
                <img src={country.flag.png} />
            </div>
        </div>
    )
}

export default Only