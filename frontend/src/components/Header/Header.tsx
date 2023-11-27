import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import headerIcon from '../../assets/HeaderIcon.png';
import { HeaderContainer } from './Header.styled';
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <HiMenuAlt1 />
        </div>
        <Link to="/">
          <img src={headerIcon} alt="logo" />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
