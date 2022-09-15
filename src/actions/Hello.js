
// Action is a function that returns an object
// of type { type : TYPE_OF_ACTION, payload : NEW_STATE }
export const sayHello = () => {

    return {
        type : "SAY_HELLO",
        payload : "Hi and Welcome to my lovely REDUX App !!!"
    }
}
