import React, { Fragment, useEffect, useState } from "react";
import Navbar_ from "../Navbar_2/Navbar";
import Player from "./player";
import "./styles_rps.css";

const weapons = ["rock", "paper", "scissor"];
let token = localStorage.getItem("token");

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


<h5>player pilih: {playerOne}</h5>
                                            <h5>comp pilih: {playerTwo}</h5>
                                            <h5> player menang : {playerwin}</h5>
                                            <h5> comp menang: {compwin}</h5>
                                            <h5> tie: {tie}</h5>
                                            <h5> jumlahsuit: {countround}</h5>
                                            <h5> player menang {roundwin} ronde </h5>
                                            <h5> player kalah {roundlose} ronde </h5>
                                            <h5> ronde sekarang : { round+ 1}</h5>

        


*/
function Refac_RPS() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [hover, setHover] = useState(true);
  const [hovercls, setHover_CLS] = useState();
  const [playerwin, setplayerwin] = useState(0);
  const [compwin, setcompwin] = useState(0);
  const [tie, settie] = useState(0);
  const [round, setRound] = useState(0);
  const [countround, setCountRound] = useState(0);
  const [roundwin, setRoundWin] = useState(0);
  const [roundlose, setRoundLose] = useState(0);
  const [roundtie, setRoundTie] = useState(0);
  const [menang, setMenang] = useState();

  const [score, setScore] = useState("12");
  const [win, setWin] = useState("true");

  const saveScore = async () => {
    // e.preventDefault();
    try {
      const body = { score, win };
      const response = await fetch("http://localhost:5000/api/suit/score/1", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log("response", response);
      if (response.ok) {
        const json = await response.json();
        console.log(json);
      }
    } catch (err) {
      console.error("err2", err.message);
    }
  };

  const scorevalidasi = roundwin;

  function playerchangingRock() {
    setPlayerOne(weapons[0]);
    startGame();
    setCountRound(countround + 1);
  }

  function playerchangingPaper() {
    setPlayerOne(weapons[1]);
    startGame();
    setCountRound(countround + 1);
  }

  function playerchangingScissors() {
    setPlayerOne(weapons[2]);
    startGame();
    setCountRound(countround + 1);
  }

  function bawahsepuluh() {
    if (countround < 10) {
      return true;
    } else {
      return false;
    }
  }

  function compchange() {
    setPlayerTwo(weapons[Math.floor(Math.random() * weapons.length)]);
  }

  function startGame() {
    compchange();
  }

  function DapatScoreMenang() {
    setScore(playerwin);
    setWin(menang);
  }

  useEffect(() => {
    const sumwinloseround = () => {
      if (countround % 10 === 0 && countround > 0 && playerwin > compwin) {
        setMenang(true);
        setRoundWin(roundwin + 1);
      } else if (
        countround % 10 === 0 &&
        countround > 0 &&
        playerwin < compwin
      ) {
        setRoundLose(roundlose + 1);
      } else {
        setRoundTie(tie + 1);
      }
    };
    sumwinloseround();
  }, [countround, playerwin, compwin]);

  useEffect(() => {
    const sumround = () => {
      if (countround % 10 === 0 && countround > 0) {
        saveScore();
        setplayerwin(0);
        setcompwin(0);
        setRound(round + 1);
      }
    };

    sumround();
  }, [countround]);

  useEffect(() => {
    const checkResult = () => {
      switch (playerOne + playerTwo) {
        case "scissorpaper":
        case "rockscissor":
        case "paperrock":
          setplayerwin(playerwin + 1);
          break;
        case "paperscissor":
        case "scissorrock":
        case "rockpaper":
          setcompwin(compwin + 1);
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
          settie(tie + 1);
          break;
      }
    };

    checkResult();
    console.log(playerOne + playerTwo);
  }, [playerTwo, playerOne]);

  return (
    <Fragment>
      <Navbar_ />
      <div className="background py-5">
        <h1 className="d-flex flex-column align-self-center">
          {" "}
          Rock Paper Scissors
        </h1>
        <div className="container py-2 mx-5">
          <div className="content">
            <div className="container ">
              <div className="row">
                <div className="col-sm px-2">
                  <div className="d-flex flex-column">
                    <div>
                      <Player weapons={playerOne} />
                    </div>
                    <h1>Player</h1>
                    <h5>{playerwin}</h5>
                  </div>
                </div>
                <div className="kolom-tengah col-sm-4 d-flex  flex-column py-5 align-self-center ">
                  <div className="d-flex  flex-column py-5 align-self-center ">
                    <h4>VS</h4>
                  </div>
                  <h1>{round + 1}</h1>
                </div>

                <div className="col-sm">
                  <div class="d-flex flex-column">
                    <Player weapons={playerTwo} />
                  </div>
                  <h1>Comp</h1>
                  <h5>{compwin}</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-4 my-2">
            <div>
              <h5>{menang}</h5>
              <h5>
                {bawahsepuluh() ? (
                  <div className="">
                    <button className="weaponBtn" onClick={playerchangingRock}>
                      {" "}
                      Rock{" "}
                    </button>
                    <button className="weaponBtn" onClick={playerchangingPaper}>
                      {" "}
                      Paper{" "}
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={playerchangingScissors}
                    >
                      {" "}
                      Scissors{" "}
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <h5>
                      Ronde {round} untuk Player :{" "}
                      {menang ? <h5>Menang</h5> : <h5>Kalah</h5>}
                    </h5>
                    <button className="weaponBtn" onClick={playerchangingRock}>
                      {" "}
                      Rock{" "}
                    </button>
                    <button className="weaponBtn" onClick={playerchangingPaper}>
                      {" "}
                      Paper{" "}
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={playerchangingScissors}
                    >
                      {" "}
                      Scissors{" "}
                    </button>
                    <button className="weaponBtn" onClick={saveScore}>
                      reset
                    </button>
                  </div>
                )}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Refac_RPS;
