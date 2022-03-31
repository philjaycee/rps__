import React, {useState} from 'react';
import Form from "react-bootstrap/Form"
import Navbar from '../Navbar_2/Navbar'
import {FormGroup, Col, Label} from 'reactstrap'
import "./login.css";

const  Register =() => {
    
  const [fullName, setfullName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setLoading] = useState(false)
  const [isDone, setDone] = useState(true) 

  

  const onSubmitForm = async (e) => {
      setLoading(true)
      e.preventDefault();
      try {
          const body = {fullName,gender,email,username, password};
          const response = await fetch("http://localhost:5000/api/user/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
          }).then(response => {console.log(response); setLoading(false)})
            .then(response => {console.log(response); setDone(true)})
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

          <div className="row row-content">
          <div className="justify-content-center">
         
          <form className="" onSubmit={onSubmitForm}>
              <FormGroup row>
              <Label htmlFor="fullname" >FullName</Label>
                  <Col >
                    <input
                    type="text"
                    placeholder ="fullname"
                    className="form-control"
                    value={fullName}
                    onChange={e => setfullName(e.target.value)}
                    />
                  </Col>
              </FormGroup>

              <FormGroup row>
              <Label htmlFor="gender" >Gender</Label>
                  <Col>
              <input
              type="text"
              placeholder= "gender"
              className="form-control"
              value={gender}
              onChange={e => setGender(e.target.value)}
              />
              </Col>
              </FormGroup>


              <FormGroup row>
              <Label htmlFor="email" >Email</Label>
                  <Col>
              <input
              type="email"
              placeholder ="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
              </Col>
              </FormGroup>

              <FormGroup row>
              <Label htmlFor="username">Username</Label>
                  <Col>
              <input
              type="text"
              className="form-control"
              placeholder= "username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              />
              </Col>
              </FormGroup>

              <FormGroup row>
              <Label htmlFor="password" >Password</Label>
                  <Col>
              <input
              type="password"
              className="form-control"
              placeholder= "password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              </Col>
              </FormGroup>
                {    !isLoading &&
                                <button className=" btn btn-danger mr-2">
                                Submit
                                </button> }
                {
                      isLoading &&
                        <button className ="btn btn-warning mr-2" disabled>
                            <i className="fas fa-spinner fa-spin"></i>Loading...
                        </button> 
                        }
          </form>
          
              
      <h6 className = "p-5" > Sudah punya akun? <a href="/login" > Login</a></h6>  
      </div>
      </div> 
      </div>
      </div>
      </>
      )
  
}
export default Register
