import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home'
import CourseForm from './CourseForm'
import { getCourses } from '../actions/courses'

class CourseContainer extends Component {

    componentDidMount() {
        this.props.getCourses()
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/course/new' component={CourseForm}/>
                </Switch>
                hi
            </div>
        )
    }
}

  const mapStateToProps = state => {
    console.log("I am state", state);
    return {
      courses: state.courseReducer.posts,
      loading: state.courseReducer.loading
    }
  }

export default connect(mapStateToProps, { getCourses })(CourseContainer)