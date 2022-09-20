import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementBy } from "../slices/counterSlice"

export const Counter = () => {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const inputRef = useRef(null)

    return <div>
        <p>Counter : {count}</p>
        <div>
            <button
                onClick={() => dispatch(increment())}
            >+</button>
            <button
                onClick={() => dispatch(decrement())}
            >-</button>
            <button
                onClick={() => dispatch(reset())}
            >Reset</button>
            <div>
                <input type="number" ref={inputRef} />
                <button
                    onClick={() => {
                        dispatch(incrementBy(inputRef.current.value))
                    }}
                >Increment by</button>
            </div>
        </div>
    </div>
}