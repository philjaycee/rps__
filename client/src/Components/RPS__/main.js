import React, { Component } from 'react'
import Player from './player'
import RPS from './rps'
import Refac_RPS from './rps_refactor'

export default class main extends Component {
  render() {
    return (
      <div className ="app">
        <div className ="container">
        <Refac_RPS />
        </div>
    </div>
    )
  }
}
