import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../Navbar_2/Navbar";
import axios from "axios";

const ProfilePage = () => {
  let user = localStorage.getItem("username");
  let token = localStorage.getItem("token");
  const [ProfileImage, setProfileImage] = useState("");
  const [ProfileCell, setProfileCell] = useState("");
  const [ProfileGender, setProfileGender] = useState("");
  const [ProfileEmail, setProfileEmail] = useState("");
  const [Score, setScore] = useState("");

  const profileData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: { Authorization: token },
      });

      if (resp.ok) {
        const json = await resp.json();
        setProfileCell(json.fullName);
        setProfileEmail(json.email);
        setProfileGender(json.gender);
      }
    } catch (err) {
      console.log("err profile: ", err.message);
    }
  };

  const scoreData = async () => {
    try {
      const resp = await fetch("http://localhost:5000/api/user/score", {
        method: "GET",
        headers: { Authorization: token },
      });

      if (resp.ok) {
        const json = await resp.json();
        setScore(json[0].total_score);
      }
    } catch (err) {
      console.log("err score:", err);
    }
  };

  
    

  

  useEffect(() => {
    profileData();
    scoreData();
    
  }, []);


  return (
    <div className="App">
      <Navbar />
      <div className="background_choice p-2 ">
        <div className="container mt-5">
          <h1> Profile Page</h1>
          <div className="p-5">
            <div className="card">
              <h1>{user}</h1>
              <h3>{Score}</h3>
              <p>{ProfileCell}</p>
              <p> {ProfileEmail}</p>
              <p>{ProfileGender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
