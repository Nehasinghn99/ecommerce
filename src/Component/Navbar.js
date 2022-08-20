import React from 'react'
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
// import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Badge, Input } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./Navbar.css"
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
 height: 60px;
 ${mobile({ backgroundColor: "lightgray" })}
`;

function Navbar() {
  return (
    <Container>
      <nav className='navbar navbar-dark bg-dark'>
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1 active" aria-current="page" href="/">Amazon.in</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <RoomIcon/>Hello<br></br>Select your address</a>
            </li>
          </ul>

          <from className="d-flex" role="search" >
            <select class="form-select" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">All Categories</option>
              <option value="2">Alexa Skills</option>
              <option value="3">Amazon Devices</option>
            </select>
            <div className="SearchContainer">
              {/* <ArrowDropDownOutlinedIcon/>
              <Input placeholder='All'/> */}
              <Input placeholder='Search'/>
              <SearchIcon style={{color:"gray", fontSize:16}}/>
            </div>
          </from>
          <div className="Language">EN</div>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello, Sign in<br></br>
                Account & Lists
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/register">Register</a></li>
                <li><a className="dropdown-item" href="/">Login</a></li>
                <li><a className="dropdown-item" href="/">Your Account</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Returns<br></br>& Orders</a>
            </li>
          </ul>
          <div className="MenuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
