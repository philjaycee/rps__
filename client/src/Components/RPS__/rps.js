import React, { Component } from 'react'
import scissors from '../assets/images/gunting.png'
import rock from '../assets/images/batu.png'
import paper from '../assets/images/kertas.png'
import refresh from '../assets/images/refresh.png'
import Navbar_ from '../Navbar_2/Navbar'

const weapons = ["rock", "paper", "scissor"];



class RPS extends Component {

  constructor (props) {
      super(props)

      this.state = {
        playerOne: '',
        playerTwo: '',
        hover : true,
        hover_cls: '',
        playerwin : 0,
        compwin : 0,
        tie : 0
    }
  } 

    
    refresh = () => {
      this.setState({
        playerwin: 0,
        compwin: 0,
        tie :0
      })
    }

    hover =() => {
      this.setState({
        hover : !this.state.hover
      }) 
    }

    button_hover_ = (hover) => {
      this.hover()
      this.setState({
        hover_cls : this.state.hover ? 'img_' : ' '
      })
    }


    checkResult = (button_hover_) => {
      var {playerOne, playerTwo,tie,playerwin,compwin} = this.state;
      switch(playerOne + playerTwo) {
        case 'scissorpaper':
        case 'rockscissor':
        case 'paperrock':
          this.setState({playerwin:playerwin+1})
          break
        case 'paperscissors':
        case 'scissorrock':
        case 'rockpaper':
          this.setState({compwin:compwin+1})
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
          this.setState({tie:tie+1})
          break
        }  
        this.button_hover_()
      }
      
       /*
       handleClick = (choice) => {
         switch (choice) {
           case 'rock':
             this.setState({playerOne:weapons[0]})
             break
          case 'paper':
              this.setState({playerOne:weapons[1]})
             break
          case 'scissor':
              this.setState({playerOne: weapons[2]})
             break
         }
       }
       */

       compchange = (checkResult) => {
        this.setState({
            playerTwo: weapons[(Math.floor(Math.random() * weapons.length))]
        })
        this.checkResult()
       }


      
       playerchangingRock = (compchange) => {
        this.setState({playerOne: weapons[0]});
        this.compchange()
    }

    playerchangingPaper = (compchange) => {
        this.setState({playerOne: weapons[1]})
        this.compchange()
    }
    

    playerchangingScissors = (compchange) => {
        this.setState({playerOne: weapons[2]})
        this.compchange()
    }

    /*
    playerchangingRock = (compchange) => {
        this.setState({playerOne: weapons[0]});
        this.compchange()
    }

    playerchangingPaper = (compchange) => {
        this.setState({playerOne: weapons[1]})
        this.compchange()
    }
    

    playerchangingScissors = (compchange) => {
        this.setState({playerOne: weapons[2]})
        this.compchange()
    }
      
          {weapons.map((choice, index)  => 
           <button key={index} onClick={() => this.handleClick(choice)}>
           {choice}
          </button>
          )} 

          <button className="weaponBtn" onClick={this.compchange}> Batu</button>
        
          <button className="weaponBtn" onClick={this.compchange}> Comp ganti items</button>
   
    */
  render() {
    const {playerOne, playerTwo, playerwin,compwin,tie, hover_cls} = this.state
    
    return (
    <> 
    <Navbar_ / >
    <div className ="container px-5 mx-5">
      <div className ="content p-5">
            <div className="container">
              <div className = "row">
                <div className = "col-lg px-2">
                  <div className="d-flex flex-column">

                    <div className = "img_" >
                          <img className ="btk my-4" src= {rock} onClick={this.playerchangingRock} ></img>
                    </div>
                    <div className = "img_">
                    <img className ="btk my-4" src= {paper} onClick={this.playerchangingPaper} ></img>
                    </div>
                    <div className = "img_">
                    <img className ="btk my-4"src= {scissors} onClick={this.playerchangingScissors} ></img>
                    </div>
                  </div>
                </div>

                      <div className = "kolom-tengah col-sm-7 d-flex  flex-column py-5 align-self-center ">
                        <div className="d-flex  flex-column py-5 align-self-center ">
                          <h1>VS</h1>
                        </div>
                      </div>
                
                      <div className = "col-sm">
                        <div class="d-flex flex-column">

                              <img className ="btk my-4" src= {rock} onClick={this.playerchangingRock} ></img>
                        
                              <img className ="btk my-4" src= {paper} onClick={this.playerchangingPaper} ></img>
                              
                              <img className ="btk my-4" src= {scissors} onClick={this.playerchangingScissors} ></img>
                        </div>
                      </div>
                </div>
              </div>
            </div>
      <img className="refresh " src= {refresh} onClick={this.refresh} ></img>
      <div className ="container py-4 my-2">
      <h5> Rock Paper Scissors</h5>
      <div>
        <h5>player pilih: {playerOne}</h5>
        <h5>comp pilih: {playerTwo}</h5>
        <h5> player menang: {playerwin}</h5>
        <h5> comp menang: {compwin}</h5>
        <h5> tie: {tie}</h5>
      </div>
      </div>
    </div>
    </>
    )
  }
}


export default RPS 
