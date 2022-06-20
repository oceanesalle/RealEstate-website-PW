import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: 64px;
  background: red;
`; 

const Logo = styled(Link)`
color: #fff;
`; 

const MenuBars = styled.i``; 
const NavMenu = styled.i``;

const Navbar = () => {
  return (
    <Nav>
      <Logo>WEBSITE</Logo>
      <MenuBars/>
      <NavMenu />
    </Nav>
  );
};

export default Navbar;