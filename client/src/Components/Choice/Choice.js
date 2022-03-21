import React,{Component, Fragment} from 'react';
import {Container,Button} from 'reactstrap';
import Navbar_2 from '../Navbar_2/Navbar'
import {MenuItems} from './MenuChoice'
import './game_choice.css'
import { NavItem } from 'react-bootstrap';

/*
const {danger} =this.state;
 state={danger:false}
  
  handleOnClick=event=>{
    this.setState({danger:true})
  }

  <h1>Game List</h1>
    <h2>Choose your Game</h2>
    // KOtak Pertama
  <grid>
      <Button id='Button1' color='danger' onClick={this.handleClicked}></Button>
      <h3>Game1</h3>
    </grid>
    // Kotak Kedua
    <grid>
      <Button id='Button2' color='danger' onClick={this.handleClicked}></Button>
      <h3>Game1</h3>
    </grid>
    // Kotak Ketiga
    <grid>
      <Button id='Button3' color='danger' onClick={this.handleClicked}></Button>
      <h3>Game1</h3>
    </grid>
<Container className={styles.container}>

</Container>


<div className = "col-lg px-2">
                    <h1>Kotak Pertama</h1>
              </div>
              <div className = "col-lg px-2">
                  <h1>Kotak Kedua</h1>
              </div>
              <div className = "col-lg px-2">
                 <h1>Kotak Ketiga</h1>
              </div>


               <img src= "../Dokumentasi/logo.png" width="100" height="100"></img>
*/

class Choice extends Component{
  
  render() {   
    return(
      <>
     
    <Navbar_2/>
    <div className ="background_choice p-5 ">
    <div className = " banner_choice container mx-2 p-2 ">
      <div className = "container align-items-center justify-content-center text-center p-5">
            <h1> Game List</h1>
               <h4>Choose Your Game </h4>
            <div className ="row py-5 my-2 ">
              { MenuItems.map((choice) => {
                return (
                      <div className ={choice.className}>
                        <h1>  Kotak {choice.posisi}</h1>
                        <a href={choice.url}>
                        <img src={choice.src} width={choice.width} height={choice.height} ></img></a>
                      </div>
                )
              }
              )}
            </div>
      </div>
    </div>
   </div>
   </>
    )}
}

export default Choice