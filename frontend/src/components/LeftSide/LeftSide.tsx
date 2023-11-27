import React, { useContext, useEffect, useState } from 'react';
import { BsCart3, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartItem from './CardItem/CartItem';
import {
  AllItemsSideCart,
  CartArea,
  DivText,
  IconLeft,
  LeftHeader,
  LeftSideContainer,
  SideCartArea
} from './LeftSide.styled';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import { OrderPizzaType } from '../../data/types';
import { AuthContext } from '../../context/auth/authContext';

const LeftSide = () => {
  const [{ order }] = useContext(CartOrderContext);
  const [cart, setCart] = useState<OrderPizzaType[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    setCart(order.orderPizza);
  }, [order]);

  console.log('ORDER', order);

  return (
    <LeftSideContainer>
      <LeftHeader>
        <div>
          {auth?.name ? (
            <Link to="/profile">
              {' '}
              <div>{auth.name.charAt(0)}</div>
            </Link>
          ) : (
            <Link to="/signin">
              {' '}
              <button>Login</button>
            </Link>
          )}
        </div>
        <Link to="/cart">
          <IconLeft>
            <span>{order ? order.orderPizza?.length : 0}</span>
            <BsCart3 />
          </IconLeft>
        </Link>
      </LeftHeader>
      <SideCartArea>
        <CartArea>
          <AllItemsSideCart>
            {cart?.map((item, index) => (
              <CartItem isCheckout={false} key={item.uniqueId} item={item} index={index} />
            ))}
            {cart?.length > 0 && (
              <Link to="/cart">
                <button>PROCEED TO CHECKOUT</button>
              </Link>
            )}
          </AllItemsSideCart>
        </CartArea>
      </SideCartArea>
    </LeftSideContainer>
  );
};

export default LeftSide;
