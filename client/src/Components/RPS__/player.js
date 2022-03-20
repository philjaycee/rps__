import React, { Component } from 'react'
import scissors from "../assets/images/gunting.png";
import paper from "../assets/images/kertas.png";
import rock from "../assets/images/batu.png";

function Player ({weapons}) {
    return (
      <>
      <div className="player">
        <img
          className="player-image"
          src={
            weapons === "rock" ? rock : weapons === "scissor" ? scissors : paper
          }
          alt="Rock Paper Scissors"
        />
      </div>
    </>
    )
}

export default Player
