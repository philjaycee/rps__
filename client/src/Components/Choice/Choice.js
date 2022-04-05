import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Navbar_2 from "../Navbar_2/Navbar";
import { MenuItems } from "./MenuChoice";
import "./game_choice.css";
import { NavItem } from "react-bootstrap";

function Choice() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [gameid, setGameid] = useState("");
  const [userid, setUserid] = useState("");
  const [exist, setExisted] = useState(false);

  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  const profileData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: { Authorization: token },
      });

      if (resp.ok) {
        const json = await resp.json();
        return json.id;
      }
    } catch (err) {
      console.log("err profile: ", err.message);
    }
  };

  const gameListData = async () => {
    try {
      const resp = await fetch(`http://localhost:5000/api/user/isplayed`, {
        method: "GET",
        headers: { Authorization: token },
      });

      if (resp.ok) {
        const json = await resp.json();
        return json.userID;
      }
    } catch (err) {
      console.log("err profile: ", err.message);
    }
  };

  const compare = () => {
    const id = profileData()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    const userID = gameListData()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
    console.log("id", id, "userid", userID);
  };

  useEffect(() => {
    const checkUser = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setisAuthenticated(true);
      }
    };
    checkUser();
    profileData();
    gameListData();
    compare();
  }, [isAuthenticated]);

  useEffect(() => {
    const usermustLogin = setInterval(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    }, 1000);
    return () => clearInterval(usermustLogin);
  }, [isAuthenticated]);

  return (
    <>
      <Navbar_2 />
      <div className="background_choice p-5 ">
        <div className=" banner_choice container mx-2 p-2 ">
          <div className="container align-items-center justify-content-center text-center p-5">
            <h1> Game List</h1>
            <h4>Choose Your Game </h4>
            <div className="row py-5 my-2 ">
              {MenuItems.map((choice) => {
                return (
                  <div className={choice.className}>
                    <h1> Kotak {choice.posisi}</h1>
                    <a href={choice.url}>
                      <img
                        src={choice.src}
                        width={choice.width}
                        height={choice.height}
                      ></img>
                    </a>
                    {exist ? <p>Sudah pernah main</p> : <p></p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choice;
