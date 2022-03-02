import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Navbar from '../Navbar_2/Navbar'
import "./login.css";

const  Register =() => {
    
  const [fullName, setfullName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
          const body = {fullName,gender,email,username, password};
          const response = await fetch("http://localhost:5000/api/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          });
          console.log(response)
      } catch (err) {
          console.log(err.message)
      }
  }

      return (
          <>
          <Navbar />
          <div className ="container" >
          <h1 className="pt-5"> Form Pendaftaran</h1>    
          <div className="Login">
          <h1 className="text-center mt-5">Coba 1</h1>
          <form className="d-flex mt-5" onSubmit={onSubmitForm}>
              <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={e => setfullName(e.target.value)}
              /><br /><br />

              <input
              type="text"
              className="form-control"
              value={gender}
              onChange={e => setGender(e.target.value)}
              /><br />

              <input
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              /><br />

              <input
              type="text"
              className="form-control"
              value={username}
              onChange={e => setUsername(e.target.value)}
              /><br />

              <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              /><br />

              <button className="btn btn-success">Add</button>
          </form>
          
              
      <h6 className = "p-5" > Sudah punya akun? <a href="/login" > Login</a></h6>   
      </div>
      </div>
      </>
      )
  
}
export default Register