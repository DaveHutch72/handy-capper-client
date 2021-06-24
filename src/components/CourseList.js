import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourses } from '../actions/courses'
import { Link } from 'react-router-dom'

class CourseList extends Component {

/*     state = {
        likes: 0
    } */

    componentDidMount() {
        this.props.getCourses()
    }

/*     handleonClick = event => {
        console.log("you done clicked me")
        this.setState((state, props) => ({
            likes: state.likes[event.target.dataset.id] + 1
        }))
    } */

    render() {
        const coursesLis = this.props.courses.map(c =>
            <>
                <Link key={c.id} to={`/courses/${c.id}`}>
                    <li key={c.id}>{c.name} - {c.par} - {c.slope} - {c.rating}</li>
                </Link>

                {/* <button onClick={this.handleonClick}>{this.state.likes[c.id]||0}</button> */}
            </>

        )

        return (
            <div className="courselist">
                <br />
                <h1 className="text-center"><br></br>My Courses</h1>
                <br />
                <ul>
                    {this.props.loading ? <h3>Loading....</h3> : coursesLis}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.courseReducer.courses,
        loading: state.courseReducer.loading,
    }
}

export default connect(mapStateToProps, { getCourses })(CourseList);