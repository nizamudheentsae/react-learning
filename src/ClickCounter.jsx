

function ClickCounter () {
    function handleClick () {
        alert ("Button Clicked!");
    }

    return (
        <div>
            <h1>
                React Event Demo

            </h1>
            <button onClick= {handleClick}>Click Me</button>
        </div>
    );
}

export default ClickCounter;