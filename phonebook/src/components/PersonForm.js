const PersonForm = ({ persons, handlers }) => {
    return (
        <form>
            <div>name:
                <input
                    value={newName}
                    onChange={handlers[0]}
                />
            </div>
            <div>number:
                <input
                    value={newNumber}
                    onChange={handlers[0]}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm