

function DashboardCard ({title, value}) {
    
    return (
        <div
        style={{
                border: "1px solid black",
                padding: "20px",
                margin: "10px"

            }}>
                <h2>{title}</h2>
                <h1>{value}</h1>
            
        </div>

    )


}

export default DashboardCard;