const courseReducer = (state = {courses: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_COURSES":
            return {
                ...state,
                loading: true
            }
        
        case "FETCH_COURSES":
            return {
                ...state,
                courses: action.payload,
                loading: false
            }
        case "ADD_COURSE":
            return {
                ...state,
                loading: true
            }
         case "COURSE_ADDED":
            return {
                ...state,
                courses: [...state.courses, action.payload],
                loading: false
                }
        default:
            return state
    }
}
export default courseReducer