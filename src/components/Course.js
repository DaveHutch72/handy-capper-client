import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScores } from '../actions/scores'


class Course extends Component {
    
    render() {
        const course = this.props.courses.find(c => `${c.id}` === this.props.history.match.params.id )
        console.log(course)
        const scoreLis = course.scores.map(s => 
        <li key={s.id}>Round: {s.round} Adjusted Round: {s.adjusted_round}</li>)
        
        return (
            <div>
                <br/>
                <h3 className="text-center">Course Scores For {course.name}  </h3>
                <br/>
                {scoreLis}
                <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courseReducer.courses,
        scores: state.scoreReducer.scores
    }
}


export default connect(mapStateToProps, { getScores })(Course);