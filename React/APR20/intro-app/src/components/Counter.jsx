import {useState} from 'react'
import Button from "./Button"


const Counter = ({step}) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const plus = "+";
    const minus = "-";

return (
    <>
    <h3>Count:{count}</h3>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>

    <Button mathAction = {increment} symbol={plus}/>
    <Button mathAction = {decrement} symbol={minus}/>
    </>
)

}

export default Counter;