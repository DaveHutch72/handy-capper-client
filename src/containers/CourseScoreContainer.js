import React, { Component } from 'react'
import ScoreForm from '../components/ScoreForm'
import Course from '../components/Course'

class CourseScoreContainer extends Component {
    render() {
        return (
            <div className="CourseScoreContainer">
                <ScoreForm history={this.props}/>
                <Course history={this.props}/>
            </div>
        )
    }
}
export default CourseScoreContainer