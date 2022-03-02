import React, { Component } from 'react'
import Player from './player'
import RPS from './rps'

export default class main extends Component {
  render() {
    return (
      <div className ="app">
        <div className ="container">
        <RPS />
        </div>
    </div>
    )
  }
}
