import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addScore } from '../actions/courses'

class ScoreForm extends Component {
    state = {
        score: {
            round: 0,
            adjusted_round: 0
        },
    }

    handleChange = event => {
        this.setState({...this.state,
            score: {...this.state.score,
                [event.target.name]: event.target.value
            },

        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const score = {...this.state.score,
        course_id: this.props.history.match.params.id}   
        console.log(score)
        this.props.addScore(score)
        this.setState({
            score: {
                round: 0,
                adjusted_round: 0
            },
        })

    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <br/>
                <h3>Add A Score</h3>
                <br/>
                <label>Score:</label><br/>
                    <input 
                        name="round"
                        type="integer"
                        value={this.state.score.round}
                        onChange={this.handleChange}/> 
                    <br/>
                <label>Adjusted Score:</label><br/>
                <input 
                    name="adjusted_round"
                    type="integer"
                    value={this.state.score.adjusted_round}
                    onChange={this.handleChange}/> 
                <br/>

                <button type="submit">Add Score</button> 
                <br/>
                <hr/>      
            </form>
        );
    }
}

export default connect(null, { addScore })(ScoreForm);