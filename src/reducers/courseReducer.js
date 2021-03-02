const courseReducer = (state = { courses: [], loading: false }, action) => {
    switch (action.type) {
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
        case "ADD_SCORE":
            return {
                ...state,
                loading: true
            }
         case "SCORE_ADDED":
             const newCourses = state.courses.map((c) =>{
                 if (c.id === action.payload.course_id) {
                     return{...c, scores: [...c.scores, action.payload]}
                 } else {
                     return c
                 }
             })
             return {
                ...state,
                courses: newCourses,
                loading: false
             }
        default:
            return state
    }
}
export default courseReducer