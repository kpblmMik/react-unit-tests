import { useState } from "react";

const Counter = () => {
    // increment and decrement counter
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1 data-testid="counter-selector">Counter</h1>
            <p data-testid="count-selector">Count: {count}</p>
            <button data-testid="increment-button" onClick={handleIncrement}>counter +1 </button>
            <button data-testid="decrement-button" onClick={handleDecrement}>counter -1 </button>
        </div>
    )

}

export default Counter;