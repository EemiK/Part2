const Country = ({ country, buttonHandler }) => {
    return (
        <div>
            {country.name.common} <button onClick={buttonHandler}>show</button>
        </div>
    )
}

export default Country