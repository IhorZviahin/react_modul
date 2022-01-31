import {useReducer} from "react";

const reduser = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {count1: state.count1 + 1};
        case 'dec':
            return {count1: state.count1 - 1};
        case 'reset':
            return {count1: state.count1 = 0};
    }
    return state
}

function App() {
    let [state, dispatch] = useReducer(reduser, {count1: 0});
    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: "inc"})}>Inc</button>
            <button onClick={() => dispatch({type: "dec"})}>Dec</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    );
}

export default App;
