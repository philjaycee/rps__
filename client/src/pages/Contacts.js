import React,{Component,Fragment} from 'react'
import {Container} from 'reactstrap'
import Navbar from '../Components/Navbar'

class Contact extends Component{
render() {  
    return(
    <Fragment>
      <Navbar />
      <Container className='p-4'><h1>Ini Halaman Home</h1></Container>
    </Fragment>
    )
  }
}
export default Contact;