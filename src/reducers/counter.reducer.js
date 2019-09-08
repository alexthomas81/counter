const InitialState = {
    count: 0,
};

const increment = (state, action) => {
    // using Spread Operators
    return {
        ...state,
        count: state.count + 1,
    }
}

const decrement = (state, action) => {
    if (state.count === 0) return;
    // using Spread Operators
    return {
        ...state,
        count: state.count - 1,
    }
}


export function counterReducer(state = InitialState, action) {
    switch (action.type) {
        case 'REQUEST_INCREMENT': return increment(state, action);
        case 'REQUEST_DECREMENT': return decrement(state, action);
        default:
            return state;
    }
}