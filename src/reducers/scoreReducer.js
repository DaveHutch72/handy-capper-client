const scoreReducer=(state={scores: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_SCORES":
            return {
                ...state,
                loading: true
            }

        case "FETCH_SCORES":
            return {
                ...state,
                scores: action.payload,
                loading: false
            }

    default:
        return state;
}
} 

export default scoreReducer;