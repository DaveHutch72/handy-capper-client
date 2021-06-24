export const getCourses = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_COURSES" })
        console.log("c")
        fetch('/courses')
            .then(res => res.json())
            .then(courses => {
                console.log("d")
                dispatch({ type: "FETCH_COURSES", payload: courses })
            })
    }
}

export const addCourse = course => {
    return (dispatch) => {
        dispatch({ type: "ADD_COURSE" })
        fetch(`/courses`, {
            method: "POST",
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(course => dispatch({ type: "COURSE_ADDED", payload: course }))
    }
}

export const addScore = score => {
    return (dispatch) => {
        dispatch({ type: "ADD_SCORE" })
        fetch(`/scores`, {
            method: 'POST',
            body: JSON.stringify(score),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(score => dispatch({ type: "SCORE_ADDED", payload: score }))
    }
}
