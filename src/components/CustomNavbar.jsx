import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CustomNavbar.css'

export default class CustomNavbar extends Component{
  render(){
    return(
     <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/"> BE 1710</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventkey={1} componentClass={Link} href="/" to="/">
            Home
          </NavItem>
          <NavItem eventkey={2} componentClass={Link} href="/about" to="/about">
            About
          </NavItem>
          <NavItem eventkey={3} componentClass={Link} href="/news" to="/news">
            News
          </NavItem>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
    )
  }
}

