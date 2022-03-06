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

/*
else if ((countround%10 === 0) && (playerwin % 10 < compwin %10)) {
            setRound(round+1)
            setRoundWin(roundlose+1)

           } else if ((countround%10 === 0) && (playerwin % 10 === compwin %10)) {
            setRound(round+1)
            setRoundWin(roundtie+1)

        }


// yang kedua

 if((countround%10 === 0)||((playerwin % 10) > (compwin %10)) )  {
                setRound(round+1)
                setRoundWin(roundwin+1)
            }else if ((countround%10 === 0) || ((playerwin % 10) < (compwin %10))) {
                setRound(round+1)
                setRoundLose(roundlose+1)
    
               } else if ((countround%10 === 0) || (playerwin % 10 === compwin %10)) {
                setRound(round+1)
                setRoundTie(roundtie+1)
            }

        


*/



function Refac_RPS()  {
    const[playerOne, setPlayerOne] = useState('');
    const[playerTwo, setPlayerTwo] = useState('');
    const[hover, setHover] = useState(true);
    const[hovercls, setHover_CLS] = useState();
    const[playerwin, setplayerwin] = useState(0);
    const[compwin, setcompwin] = useState(0);
    const[tie, settie] = useState(0);
    const[round, setRound] = useState(0)
    const[countround, setCountRound] = useState(0)
    const[roundwin, setRoundWin] = useState(0)
    const[roundlose, setRoundLose] = useState(0)
    const[roundtie, setRoundTie] = useState(-1)

    function playerchangingRock() {
        setPlayerOne(weapons[0])
        setCountRound(countround+1)
    }

    function playerchangingPaper() {
        setPlayerOne(weapons[1])
        setCountRound(countround+1)
    }

    function playerchangingScissors() {
        setPlayerOne(weapons[2])
        setCountRound(countround+1)
    }

    useEffect(() => {

        const compchange = () => {
          setPlayerTwo(weapons[(Math.floor(Math.random() * weapons.length))])
        } 
        compchange()
    } 
    , [playerTwo] )

    useEffect(() => {
        const checkResult = () => {
            
            switch(playerOne + playerTwo) {
                case 'scissorpaper':
                case 'rockscissor':
                case 'paperrock':
                  setplayerwin(playerwin+1)
                  break
                case 'paperscissor':
                case 'scissorrock':
                case 'rockpaper':
                  setcompwin(compwin+1)
                  break
                case 'rockrock':
                case 'paperpaper':
                case 'scissorscissor':
                  settie(tie+1)
                  break
                }
        }
        
        checkResult()
        console.log(playerOne+playerTwo)

    }, [playerOne,playerTwo])


    useEffect(() => {
        
        const sumround = () => {
            if((countround%10 === 0)&&((playerwin % 10) > (compwin %10)) )  {
                setRound(round+1)
                
            }else if ((countround%10 === 0) && ((playerwin % 10) < (compwin %10))) {
                setRound(round+1)
                
    
               } 

        } 
        
        sumround()

    }, [countround,playerwin,compwin])

    useEffect(() => {
        
        const sumwinloseround = () => {
            if((countround%10 === 0)&&((playerwin % 10) > (compwin %10)) )  {
                
                setRoundWin(roundwin+1)
            }else if ((countround%10 === 0) && ((playerwin % 10) < (compwin %10))) {
                
                setRoundLose(roundlose+1)
    
               } 

        } 
        
        sumwinloseround()

    }, [countround,playerwin,compwin])
    




    
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
                    <div>
                        <h5>player pilih: {playerOne}</h5>
                        <h5>comp pilih: {playerTwo}</h5>
                        <h5> player menang: {playerwin}</h5>
                        <h5> comp menang: {compwin}</h5>
                        <h5> tie: {tie}</h5>
                        <h5> countronde: {countround}</h5>
                        <h5> ronde: {round}</h5>
                        <h5> menangronde: {roundwin}</h5>
                        <h5> kalahronde: {roundlose}</h5>
                        <h5> tieronde: {roundtie}</h5>
                    </div>
                    </div>
              </div>
            </div>
            
        </Fragment>
    )

}

export default Refac_RPS 
