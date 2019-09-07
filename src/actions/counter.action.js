function requestIncrement() {
    return {
        type: 'REQUEST_INCREMENT',
    }
}

function requestDecrement() {
    return {
        type: 'REQUEST_DECREMENT',
    }
}


// Action Creator: This is used to trigger action
export const IncrementCount = () => {
    return (dispatch => {
        dispatch(requestIncrement());
    })
};

export const DecrementCount = () => {
    return (dispatch => {
        dispatch(requestDecrement());
    })
};