const Filter = ({ filter, handler }) => {
    return (
        <form>
            <div>filter shown with
                <input
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
        </form>
    )
}

export default Filter