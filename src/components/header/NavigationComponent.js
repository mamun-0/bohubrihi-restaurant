import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap';

const NavigationComponent = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);
  const navToggle = () => {
    setNavIsOpen(!isNavOpen);
  };
  return (
    <div>
      <Navbar color='dark' dark expand='sm'>
        <NavbarToggler onClick={navToggle} />
        <NavbarBrand href='/'>Bohubrihi Restaurant</NavbarBrand>
        <Collapse navbar isOpen={isNavOpen}> 
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/menu' className='nav-link'>
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/contract' className='nav-link'>
                Contract
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
