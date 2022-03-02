import React, { Component } from 'react'
import RPS from './rps'

function Player (props) {
    return (
      <div className="container">
          <img className="player-image"
           
           src={this.props.rock} alt ="rock" />
         <img className="player-image"
           src={this.props.paper} alt ="paper" />
        <img className="player-image"
           src={this.props.scissors} alt ="scissors" />
      </div>
    )
}

export default Player
