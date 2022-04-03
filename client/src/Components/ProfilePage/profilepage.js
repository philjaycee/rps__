import React, { useEffect, useState } from "react";
import "./profile.css";
import Navbar from "../Navbar_2/Navbar";
import axios from "axios";

const ProfilePage = () => {
  let user = localStorage.getItem("username");
  let token = localStorage.getItem("token");
  const [ProfileName, setProfileName] = useState("");
  const [ProfileCell, setProfileCell] = useState("");
  const [ProfileGender, setProfileGender] = useState("");
  const [ProfileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      console.log("test1");
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
      console.log("err123", err);
    }
  };

  useEffect(() => {
    profileData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="background_choice p-2 ">
        <div className="container mt-5">
          <h1> Profile Page</h1>
          <div className="p-5">
            <div className="card">
              <h1> {user}</h1>
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
