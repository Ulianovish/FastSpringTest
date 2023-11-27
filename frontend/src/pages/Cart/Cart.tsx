import React, { useContext } from 'react';
import emtycart from '../../assets/emtycart.gif';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import CartItem from '../../components/LeftSide/CardItem/CartItem';
import { AllItemsCart, CartScreen } from './Cart.styled';
import { CartArea } from '../../components/LeftSide/LeftSide.styled';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
const Cart = () => {
  const [{ order }] = useContext(CartOrderContext);
  const deleviryPrice = order.price > 100 ? 0 : 50;
  const totalPrice = order.price + deleviryPrice;
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate(`/shipping`);
  };
  return (
    <>
      <SideBar />
      <CartScreen>
        <h1>MY CART</h1>
        {order.orderPizza?.length > 0 ? (
          <CartArea>
            <AllItemsCart>
              {order.orderPizza.map((item, index) => (
                <CartItem isCheckout={true} key={item.uniqueId} item={item} index={index} />
              ))}
            </AllItemsCart>
            <PriceDetails>
              <button onClick={checkoutHandler} disabled={totalPrice === 0 ? true : false}>
                PROCEED TO CHECKOUT
              </button>
            </PriceDetails>
          </CartArea>
        ) : (
          <>
            <img src={emtycart} alt="" />
            <h2>Hey, it feels so light!</h2>
            <p>There is nothing in your bag. Lets add some items.</p>
            <Link to="/">
              <button>Go Back</button>
            </Link>
          </>
        )}
      </CartScreen>
    </>
  );
};

export default Cart;
