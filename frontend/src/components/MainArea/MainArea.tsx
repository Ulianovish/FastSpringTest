import React, { useContext, useState } from 'react';
import pizzaboy from '../../assets/pizzaboy.png';
import Pizzas from '../Pizzas/Pizzas';
import {
  Banner,
  BannerImage,
  CircleFull,
  CircleHalf,
  CircleSmall,
  CircleSmaller,
  DivMainArea,
  DivText,
  PizzaArea
} from './MainArea.styled';
import Header from '../Header/Header';
import { AuthContext } from '../../context/auth/authContext';
const MainArea = () => {
  const { auth } = useContext(AuthContext);
  const [category, setCategory] = useState('pizza');

  return (
    <DivMainArea>
      <Header />
      <Banner>
        <BannerImage>
          <img src={pizzaboy} alt="" />
        </BannerImage>
        <DivText>
          <h2>Hello {auth?.name}</h2>
          <p>
            Get Free delivery on <span>$70</span> and above
          </p>
          <button>Order Now!</button>
          <CircleFull
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
            alt=""
          />
          <CircleSmall
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
            alt=""
          />
          <CircleSmaller
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
            alt=""
          />

          <CircleHalf
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Orange_circle_100%25.svg/768px-Orange_circle_100%25.svg.png"
            alt=""
          />
        </DivText>
      </Banner>

      <PizzaArea>
        <h3>Menu</h3>
        <div>
          <Pizzas />
        </div>
      </PizzaArea>
    </DivMainArea>
  );
};

export default MainArea;
