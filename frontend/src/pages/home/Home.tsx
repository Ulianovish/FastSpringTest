import React from 'react';
import MainArea from '../../components/MainArea/MainArea';
import SideBar from '../../components/SideBar/SideBar';
import LeftSide from '../../components/LeftSide/LeftSide';

const Home = () => {
  return (
    <>
      <SideBar />
      <MainArea />
      <LeftSide />
    </>
  );
};

export default Home;
