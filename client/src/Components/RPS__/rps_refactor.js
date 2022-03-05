import React, { Fragment,useEffect,useState } from 'react'
import scissors from '../assets/images/gunting.png'
import rock from '../assets/images/batu.png'
import paper from '../assets/images/kertas.png'
import refresh from '../assets/images/refresh.png'
import Navbar_ from '../Navbar_2/Navbar'

const weapons = ["rock", "paper", "scissor"];

/*
function playerchangingRock() {
    setPlayerOne({playerOne:weapons[0]})
}

function playerchangingPaper() {
    setPlayerOne({playerOne:weapons[1]})
}

function playerchangingScissors() {
    setPlayerOne({playerOne:weapons[2]})
}
*/



function Refac_RPS()  {
    const[playerOne, setPlayerOne] = useState();
    const[playerTwo, setPlayerTwo] = useState();
    const[hover, setHover] = useState(true);
    const[hovercls, setHover_CLS] = useState();
    const[playerwin, setPlayerwin] = useState(0);
    const[compwin, setCompwin] = useState(0);
    const[tie, setTie] = useState(0);

    function playerchangingRock() {
        setPlayerOne(weapons[0])
    }

    function playerchangingPaper() {
        setPlayerOne(weapons[1])
    }

    function playerchangingScissors() {
        setPlayerOne(weapons[2])
    }

    useEffect(() => {

        const compchange = () => {
          setPlayerTwo(weapons[(Math.floor(Math.random() * weapons.length))])
        } 
        compchange()
    } 
    , [playerOne] )

    useEffect(() => {
        const checkResult = () => {
            switch(playerOne + playerTwo) {
                case 'scissorpaper':
                case 'rockscissor':
                case 'paperrock':
                  setPlayerwin(playerwin+1)
                  break
                case 'paperscissors':
                case 'scissorrock':
                case 'rockpaper':
                  setCompwin(compwin+1)
                  break
                case 'rockrock':
                case 'paperpaper':
                case 'scissorscissor':
                  setTie(tie+1)
                  break
                }
        }

        checkResult()

    }, [playerOne,playerTwo])


    useEffect(() => {

        
       

    }, [playerOne,playerTwo])




    return (
        <Fragment>
        <Navbar_ / >
        <div className ="container px-5 mx-5">
            <div className ="content p-5">
                <div className="container">
                    <div className = "row">


                            <div className = "col-lg px-2">
                                <div className="d-flex flex-column">
                                <div className = "img_" >
                                    <img className ="btk my-4" src= {rock} onClick={playerchangingRock} ></img>
                                </div>
                                <div className = "img_">
                                    <img className ="btk my-4" src= {paper} onClick={playerchangingPaper}  ></img>
                                </div>
                                <div className = "img_">
                                    <img className ="btk my-4"src= {scissors} onClick={playerchangingScissors} ></img>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
             

               <img className="refresh " src= {refresh}  ></img>
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
            </div>
            
        </Fragment>
    )

}

export default Refac_RPS 
