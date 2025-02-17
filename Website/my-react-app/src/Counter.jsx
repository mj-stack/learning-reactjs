import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1)
    }
    
    function decrement() {
        setCount(c => c - 1)
    }
    
    function reset() {
        setCount(0)
    }

    return(
        <>
            <div>
                <p>Count: {count}</p>
                <div>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default Counter;