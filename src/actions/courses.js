export const getCourses = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_COURSES"})
        fetch ('/courses')
        .then(res => res.json())
        .then(posts => dispatch({type: "FETCH_COURSES", payload: posts}))
    }
}