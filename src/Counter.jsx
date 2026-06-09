
import { useState } from 'react';

function Counter () {

    const [count, setCount] = useState (0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleClick2() {
        setCount(count - 1);
    }

    return (
        <div className="container mx-auto mt-5 align-between">
            <h1>Count: {count}</h1>

            <button className="btn ml-2 px-4 py-2" onClick={handleClick}> Increase</button>
            <button className="btn ml-2 px-4 py-2" onClick={handleClick2}> Decrease</button>
            <button className="btn ml-2 px-4 py-2" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;