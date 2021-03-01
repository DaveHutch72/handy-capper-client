import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScores } from '../actions/scores'

class ScoreList extends Component {
    componentDidMount() {
        this.props.getScores()
    }
    
    render() {
        console.log("rendering")

        const scoreLis = this.props.scores.map(s => { 
        return(
        <li key={s.id}>{s.round} - {s.adjusted_round}</li>)
        })


        return (
            <div className="Scorelist">
                <br/>
                <h1 className="text-center">My Scores</h1>
                <br/>
                <ul>
                {this.props.loading ? <h3>Loading....</h3> : scoreLis}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        scores: state.scoreReducer.scores,
        loading: state.courseReducer.loading
    }
}

export default connect(mapStateToProps, { getScores })(ScoreList)