import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Navi from '../components/Navi';
import Home from '../components/Home'
import CourseForm from './CourseForm'
import { getCourses } from '../actions/courses'
import CourseList from '../components/CourseList'
import CourseScoreContainer from './CourseScoreContainer'

class CourseContainer extends Component {

    componentDidMount() {
        this.props.getCourses()
    }

    render() {
        return (
            <div className="container-fluid">
                <Navi/>
                <Switch>
                    <Route exact path='/courses' component={CourseList} />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/course/new' component={CourseForm}/>
                    <Route path='/courses/:id' component={CourseScoreContainer} />
                </Switch>
            </div>
        )
    }
}

  const mapStateToProps = state => {
    return {
      courses: state.courseReducer.courses,
      loading: state.courseReducer.loading
    }
  }

export default connect(mapStateToProps, { getCourses })(CourseContainer)