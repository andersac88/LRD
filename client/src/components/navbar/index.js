import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Capitol from '../../images/capitol.jpg'
import './style.css'

export default function NavigationBar() {
  return (
      <>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">TBD-DDDB</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#home">Social Media</Nav.Link>
            <Nav.Link href="#features">Donate</Nav.Link>
            <Nav.Link href="#pricing">Store</Nav.Link>
        </Nav>
     </Navbar>
     <div id="bannerBox">
      <img style={{width: "100%"}} src={Capitol} alt="Capitol Building" />
      <div id="titleBox"><strong>TBD-DDDB</strong></div>
    </div>
    </>
  );
}
