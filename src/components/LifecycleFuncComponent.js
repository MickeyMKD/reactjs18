import { useEffect, useState } from "react";


export const LifecycleFuncComponent = () => {
    const [counter, setCounter] = useState(0)

    // wrong way
    // counter += 1

    useEffect(() => {
        console.log("LifecycleFuncComponent -> useEffect");
        return () => {
            console.log("LifecycleFuncComponent -> componentWillUnmount")
        }
}, []); // empty array as dependency === componentDidMount

    console.log("LifecycleFuncComponent -> render");

    const increment = () => {
        setCounter((count) => (++count))
    }

    return (<div>
        <>
            <h2>Lifecycle Functional Component</h2>
            <p>Counter Value: {counter}</p>
            <button onClick={increment}>
                Increment                
            </button>
        </>
    </div>)
};