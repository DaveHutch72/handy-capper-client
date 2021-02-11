import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home'

class CourseContainer extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/course/new' component={PostForm}/>
                    <Route path='/course/:id/edit' render={(routerProps) => <EditPost {...routerProps}  />}/>
                    <Route path='/course/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/>}/>
                    <Route exact path='/courses' render={(routerProps) => <PostList {...routerProps} posts={this.props.posts}/>}/>
                    <Route path='/courses/:course_id/scores' render={(routerProps) => <Comments {...routerProps} comments={this.props.post.comments}/>}/> */}
                </Switch>
                hi
            </div>
        )
    }
}
export default CourseContainer