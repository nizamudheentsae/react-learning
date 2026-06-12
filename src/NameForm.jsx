import { useState } from "react";


function NameForm () {

    const [name, setName] = useState ("");
    const [job, setJob] = useState ("");
    const [location, setLocation] = useState ("")

    return (
        <div>
            <h1>User Form</h1>

            <h2>NAME</h2>
            <input

                type = "text"
                placeholder = "Enter your name"
                value = {name}
                onChange = {(event) => setName(event.target.value)}
            />
            <h2>JOB</h2>
            <input
            type = "text"
            placeholder = "Enter Your Job"
            value = {job}
            onChange={(event) => setJob(event.target.value)}

            />
            <h2>CITY</h2>
            <input
            type = "text"
            placeholder = "Enter Your City"
            value = {location}
            onChange={(event) => setLocation(event.target.value)} />



            <h2> Hello {name} <br /> job: {job} <br /> City: {location} </h2>
        </div>

    )
}

export default NameForm;