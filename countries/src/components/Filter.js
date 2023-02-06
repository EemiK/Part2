import Country from "./Country"

const Filter = ({ countries }) => {
    return (
        countries.lenth > 10
            ?
            <div>
                Too many matches, specify another filter
            </div>
            :
            countries.map(c =>
                <Country
                    country={c}
                    key={countries.indexOf(c)}
                />
            )
    )
}

export default Filter