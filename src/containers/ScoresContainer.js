import React, { Component } from 'react'
import  ScoreList from '../components/ScoreList'

class ScoreContainer extends Component {
    render() {
        
        return (
            <div className="scoresContainer">
                <ScoreList />
            </div>
        )
    }
}

export default ScoreContainer;