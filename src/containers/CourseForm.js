import React, { Component } from 'react';
import { addCourse } from '../actions/courses';
import { connect } from 'react-redux';

class CourseForm extends Component {

    state = {
        course: {
            name: '',
            par: 0,
            rating: 0,
            slope: 0
        },
        loading: false
    }

    handleOnChangeContent = (event) => {
        this.setState({...this.state,
            course: {...this.state.course,
                [event.target.name]: event.target.value},
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const course = {...this.state.course}
        this.props.addCourse(course)
        this.setState({
            course: {
                name: '',
                par: 0,
                rating: 0,
                slope: 0
            },
            loading: false
        })
        this.props.history.push('/courses')
    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <br/>
                <h4>Add a Course</h4>
                <label>Course Name:</label><br/>
                <input 
                name="name"
                type="text"
                value={this.state.course.name}
                onChange={this.handleOnChangeContent}/> 
                <br/>
                <label>Par:</label><br />
                <input 
                name="par"
                type="integer"
                value={this.state.course.par}
                onChange={this.handleOnChangeContent}/> <br/><br/>
                <label>Slope Rating:</label><br />
                <input 
                name="slope"
                type="integer"
                value={this.state.course.slope}
                onChange={this.handleOnChangeContent}/> <br/><br/>
                <label>Course Rating:</label><br />
                <input 
                name="rating"
                type="integer"
                value={this.state.course.rating}
                onChange={this.handleOnChangeContent}/> <br/><br/>

                <button type="submit">Add Course</button>       
            </form>
        );
      }
    
}

export default connect(null, { addCourse })(CourseForm);