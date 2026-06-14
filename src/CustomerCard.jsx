

function CustomerCard ({name, city}) {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px"
            }}>

                <h2>{name}</h2>
                <p>{city}</p>
            </div>

    )
}

export default CustomerCard;