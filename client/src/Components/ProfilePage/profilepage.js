import React, {  useEffect, useState } from 'react'
import './profile.css'
import Navbar from '../Navbar_2/Navbar'
import axios from "axios"


const ProfilePage = () => {

    let user = localStorage.getItem('username')

    const [ProfileName, setProfileName] = useState("");
    const [ProfileCell, setProfileCell] = useState("");
    const [ProfileImage, setProfileImage] = useState("");
    const [ProfileEmail, setProfileEmail] = useState("");


    const profileData = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api");
            setProfileCell(res.data.results[0].cell)
            setProfileEmail(res.data.results[0].email)
            setProfileImage(res.data.results[0].picture.large)
            setProfileName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);

        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        profileData()
    },[])

    return (
        <div className="App">
            <Navbar />
            <div className ="background_choice p-2 ">
            <div className ="container mt-5">
                <h1> Profile Page</h1>
                <div className ="p-5">
                  <div className = "card">
                    <img src={ProfileImage}  />
                    <h1 > {user}</h1>
                    <p> {ProfileEmail}</p>
                    <p>{ProfileCell}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
  
}

export default ProfilePage
