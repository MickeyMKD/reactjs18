import { useDispatch, useSelector } from "react-redux";
import { sayHello } from "../actions/Hello";
import { increment, decrement } from "../actions/Counter"

export const Hello = () => {

   const dispatch = useDispatch() 
    const greeting = useSelector(state => state.HelloReducer.greeting)
    const counter = useSelector(state => state.CounterReducer.counter)

    // use the payload to increment by 12

    return (
        <div>
            <h1>{greeting}</h1>
            <button
                onClick={() => dispatch(sayHello())}
            >
                Click Me for Hello
            </button>
            <hr />
            <p>Counter : {counter}</p>
            <input 
                type="number"
                placeholder="Incr / Decr by Number" 
            />
            <button
                onClick={() => dispatch(increment())}
            >+</button>
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
        </div>
    )
}