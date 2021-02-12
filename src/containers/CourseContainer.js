import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home'
import CourseForm from './CourseForm'
import { getCourses } from '../actions/courses'
import CourseList from '../components/CourseList'

class CourseContainer extends Component {

    componentDidMount() {
        this.props.getCourses()
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/courses' component={CourseList} />
                    <Route exact path='/' component={Home} />
                    <Route path='/course/new' component={CourseForm}/>
                    <Route path='/course/:id' component={CourseScoresContainer} />
                </Switch>
            </div>
        )
    }
}

  const mapStateToProps = state => {
    console.log("I am state", state);
    return {
      courses: state.courseReducer.courses,
      loading: state.courseReducer.loading
    }
  }

export default connect(mapStateToProps, { getCourses })(CourseContainer)