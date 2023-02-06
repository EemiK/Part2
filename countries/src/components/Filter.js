const Filter = ({ countries }) => {
    return (
        countries.lenth > 10
            ?
            <div>
                Too many matches, specify another filter
            </div>
            :
            countries.map(c => <div>{c.name.common}</div>)
    )
}

export default Filter