const courseReducer = (state = {courses: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_POSTS":
            return {
                ...state,
                loading: true
            }
        
        case "FETCH_POSTS":
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        default:
            return state
    }
}
export default courseReducer