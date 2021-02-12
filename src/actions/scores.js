export const getScores = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_SCORES"})
        fetch('/scores')
        .then(res => res.json())
        .then(scores => dispatch({type: "FETCH_SCORES", payload: scores}))
    }
}