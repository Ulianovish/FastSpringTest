import React, { useState } from 'react';
import { FaHome, FaBoxOpen, FaPizzaSlice, FaTimes } from 'react-icons/fa';
import { BsHeartHalf, BsGear } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { Close, Icon, NavSidebar } from './SideBar.styled';
import useAuth from '../../hooks/useAuth';
const SideBar = () => {
  const [show, setShow] = useState(true);
  const { auth } = useAuth();

  const location = useLocation();
  const path = location.pathname;

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <NavSidebar showSideBar={show}>
      <Close onClick={() => setShow(!show)}>
        <FaTimes />
      </Close>
      <div>
        <Link to="/">
          <Icon active={path === '/'}>
            <FaHome />
          </Icon>
        </Link>
        <Link to="/orders">
          <Icon active={path === '/orders'}>
            <FaBoxOpen />
          </Icon>
        </Link>
        <Link to="/your-address">
          {' '}
          <Icon active={path === '/your-address'}>
            <CgFileDocument />
          </Icon>
        </Link>

        {/* <Link to="/profile">
          <Icon active={path === '/profile'}>
            <BsGear />
          </Icon>
        </Link> */}
      </div>
      <div className="bottom-icon">
        {auth && (
          <Icon active={false} onClick={handleSignOut}>
            <FiLogOut />
          </Icon>
        )}
      </div>
    </NavSidebar>
  );
};

export default SideBar;
