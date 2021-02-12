import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourses } from '../actions/courses'
import { Link } from 'react-router-dom' 

class CourseList extends Component {
    componentDidMount() {
        this.props.getCourses()
    }

    render() {
    console.log("rendering")
    const coursesLis = this.props.courses.map(c => 
        <Link key={c.id}to={`/courses/${c.id}`}> 
            <li key={c.id}>{c.name} - {c.location}</li>
        </Link>
    )
                                            
    return (
            <div className="courselist">
                <br/>
                <h1 className="text-center">My Courses</h1>
                <br/>
                <ul>
                    {this.props.loading ? <h3>Loading....</h3> :coursesLis}
                </ul>
                 
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        courses: state.courseReducer.courses,
        loading: state.courseReducer.loading,
    }
}

export default connect(mapStateToProps, {getCourses})(CourseList);