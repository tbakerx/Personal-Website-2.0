import './Header.scss'

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';


const Header = () => {
  return (
    <div className='Header'>
      <Navbar color="#25272B" expand="md" style={{ padding: 0 }}>
        <NavbarBrand>
          <div>
            <h1 className='Brand'>Navbar Brand</h1>
          </div>
          </NavbarBrand>
      </Navbar>
    </div>
  )
}

export default Header
