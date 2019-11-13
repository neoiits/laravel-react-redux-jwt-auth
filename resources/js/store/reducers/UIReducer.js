const defaultState = {progress_bar : false};
const UIReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'PROGRESS_BAR_STATUS' :
            return {...state, progress_bar:action.payload};
        default :
            return state;
    }
}

export default UIReducer;