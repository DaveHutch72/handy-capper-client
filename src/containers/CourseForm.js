import React, { Component } from 'react';

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
                name: event.target.value,
                par: event.target.value,
                rating: event.target.value,
                slope: event.target.value}
        })
    }


    
    render() {
        return (
            <div>
                insert form here
            </div>
        )
    }
}

export default CourseForm