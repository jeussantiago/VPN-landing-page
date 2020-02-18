// import React, { Component } from "react";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import classnames from "classnames";
import { Navbar, Nav, Dropdown } from 'react-bootstrap';




export default function NavBar() {
  const navBarFixedTopStyle = { position: 'fixed', top: 0, flex: 1, right: 0, left: 0 };
  const navDropdownMenuLinkStyle = {
    fontSize: "20px",
    fontWeight: "400",
    letterSpacing: "1px"
  }
  //use react hooks to read the window width
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = React.useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  //NavBar Right Links - update based on user window width
  const rightNavbar = () => {
    const maxWindowWidth = 770;

    if (width < maxWindowWidth) {
      //dropdown for low width windows 
      return (
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{ fontSize: "30px", borderRadius: "15px" }}
            className="px-5 py-0">
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ marginTop: "10px" }}>
            <Dropdown.Item style={navDropdownMenuLinkStyle} href="#Home" >Home</Dropdown.Item>
            <Dropdown.Item style={navDropdownMenuLinkStyle} href="#Product" >Product</Dropdown.Item>
            <Dropdown.Item style={navDropdownMenuLinkStyle} href="#Risk" >Risk</Dropdown.Item>
            <Dropdown.Item style={navDropdownMenuLinkStyle} href="#Prices" >Prices</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      )
    } else {
      //normal row for high width windows
      return (
        <div className="nav navbar-right row">
          <Nav.Link className={classnames(styles.navRightText, styles.navRightLine)} href="#Home">Home</Nav.Link>
          <Nav.Link className={classnames(styles.navRightText, styles.navRightLine)} href="#Product">Product</Nav.Link>
          <Nav.Link className={classnames(styles.navRightText, styles.navRightLine)} href="#Risk">Risk</Nav.Link>
          <Nav.Link className={classnames(styles.navRightText)} href="#Prices">Prices</Nav.Link>
        </div>
      )
    }
  }

  return (
    <Navbar className={styles.navBarContainer} style={navBarFixedTopStyle}>
      <div className="container">
        <a className={styles.navLogo} href="#home">NotRealVPN</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {rightNavbar()}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}









