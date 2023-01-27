const PersonForm = ({ name, number, handlers, submit }) => {
    return (
        <form onSubmit={submit}>
            <div>name:
                <input
                    value={name}
                    onChange={handlers[0]}
                />
            </div>
            <div>number:
                <input
                    value={number}
                    onChange={handlers[1]}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm