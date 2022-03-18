import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from '../Navbar_2/Navbar'
import {FormGroup, Col, Label} from 'reactstrap'
import './login.css'


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setLoading] = useState(false)

  const { username, password } = inputs;

  const onChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value }); }

  const onSubmitForm = async e => {
    setLoading(true)
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch(
        "http://localhost:5000/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }).then(response => {console.log(response); setLoading(false)})
    } catch (err) {
      console.error(err.message);
    }
  };

   return (
          <>
          
            <Navbar />
             
            <div className ="container ">
                <h1 className="pt-5"> Form Login</h1>    
                <div className="Login">

                    <div className="row row-content">
                    <div className="justify-content-center">
         
                    <form className="" onSubmit={onSubmitForm}>
                        
                        <FormGroup row>
                        <Label htmlFor="username">Username</Label>
                            <Col>
                        <input
                        type="text"
                        className="form-control"
                        placeholder= "username"
                        value={username}
                        onChange={e => setInputs(e.target.value)}
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
                        onChange={e => setInputs(e.target.value)}
                        />
                        </Col>
                        </FormGroup>
                          {    !isLoading &&
                                          <button className=" btn btn-danger mr-2">
                                          Login
                                          </button> }

                          {
                                isLoading &&
                                  <button className ="btn btn-warning mr-2" disabled>
                                      <i className="fas fa-spinner fa-spin"></i>Loading...
                                  </button> 
                                  }
                    </form>
                    <h6 className = "p-5" > Belum punya akun <a href="/register" > Register</a></h6>  
                </div>
              </div> 
            </div>
          </div>
        
      </>
      )
};

export default Login;
