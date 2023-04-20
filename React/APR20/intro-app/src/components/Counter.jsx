import {useState} from 'react'

const Counter = ({step}) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);

return (
    <>
    <h3>Count:{count}</h3>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
)

}

export default Counter;