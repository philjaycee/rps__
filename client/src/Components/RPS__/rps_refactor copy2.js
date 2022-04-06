import React, { Fragment, useEffect, useState } from "react";
import Navbar_ from "../Navbar_2/Navbar";
import Player from "./player";
import "./styles_rps.css";

const weapons = ["rock", "paper", "scissor"];
let token = localStorage.getItem("token");

function Refac_RPS() {
  // const [players, setPlayer]= useState({
  //   playerOne: "",
  //   playerTwo: "",
  // })
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerwin, setplayerwin] = useState(0);
  const [compwin, setcompwin] = useState(0);
  const [tie, settie] = useState(0);
  const [round, setRound] = useState(0);
  const [countround, setCountRound] = useState(0);
  const [roundwin, setRoundWin] = useState(0);
  const [menang, setMenang] = useState(true);

  const [score, setScore] = useState(0);
  const [win, setWin] = useState(true);

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
        console.log("json", json);
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
    console.log("playerwin1", playerwin, "menang1", menang);
    setScore(playerwin);
    setWin(menang);
    console.log("score", score, "win", win);
  }

  useEffect(() => {
    const sumwinloseround = () => {
      if (countround % 10 === 0 && countround >= 0 && playerwin > compwin) {
        setMenang(true);
        console.log(menang);
      }
    };
    sumwinloseround();
  }, [countround, playerwin, compwin]);

  useEffect(() => {
    const sumloseround = () => {
      if (countround % 10 === 0 && countround >= 0 && compwin > playerwin) {
        setMenang(false);
        console.log(menang);
      }
    };
    sumloseround();
  }, [countround, playerwin, compwin]);

  useEffect(() => {
    const sumround = async () => {
      if (countround % 10 === 0 && countround > 0) {
        await DapatScoreMenang();
        setRound(round + 1);
      }
    };
    sumround();
  }, [countround]);

  useEffect(() => {
    const setzerocomp = () => {
      if (
        countround % 10 === 0 &&
        countround >= 0 &&
        playerwin >= 0 &&
        compwin >= 0 &&
        tie >= 0
      ) {
        // setplayerwin(0);
        // settie(0);
        // setcompwin(0);
      }
    };
    setzerocomp();
  }, [countround, playerwin, compwin, tie]);

  useEffect(() => {
    const checkResult = async () => {
      // eslint-disable-next-line default-case
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
    setTimeout(checkResult(), 5000);
    console.log(playerOne + playerTwo);
  }, [playerOne, playerTwo]);

  return (
    <Fragment>
      <Navbar_ />
      <div className="background py-5">
        <h1 className="d-flex flex-column align-self-center">
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
                  <h1>{countround}</h1>
                  <h5>tie: {tie}</h5>
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
                      Rock
                    </button>
                    <button className="weaponBtn" onClick={playerchangingPaper}>
                      Paper
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={playerchangingScissors}
                    >
                      Scissors
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <h5>
                      Ronde {round} untuk Player :
                      {menang ? <h5>Menang</h5> : <h5>Kalah</h5>}
                    </h5>
                    <button className="weaponBtn" onClick={playerchangingRock}>
                      Rock
                    </button>
                    <button className="weaponBtn" onClick={playerchangingPaper}>
                      Paper
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={playerchangingScissors}
                    >
                      Scissors
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={() => {
                        DapatScoreMenang();
                      }}
                    >
                      update
                    </button>
                    <button
                      className="weaponBtn"
                      onClick={() => {
                        saveScore();
                      }}
                    >
                      reset
                    </button>
                  </div>
                )}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Refac_RPS;
