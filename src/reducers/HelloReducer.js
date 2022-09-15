const initialState = {
    greeting: "Hi !"
}

const HelloReducer = (state = initialState, action) => {

    // ALWAYS returns the WHOLE STATE
    switch(action.type) {
        case "SAY_HELLO" :
            return {
                ...state,
                greeting : action.payload // "Hello World !!!!!"
            }
        default :
            return state
    }
}

export default HelloReducer