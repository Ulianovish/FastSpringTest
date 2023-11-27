import React, { useState, useEffect, useContext } from 'react';
import pizzaBase from '../../assets/pizza-base.png';
import './pizzbuilder.css';
import SideBar from '../../components/SideBar/SideBar';
import Header from '../../components/Header/Header';
import LeftSide from '../../components/LeftSide/LeftSide';
import { DivMainArea } from '../../components/MainArea/MainArea.styled';
import { CrustType, OrderPizzaType, SauceType, SizeType, ToppingType } from '../../data/types';
import { CustomPizzaContext } from '../../context/customPizza/customPizzaContext';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

const CustomPizza = () => {
  const [showVeg, setShowVeg] = useState(true);
  const [showMeat, setShowMeat] = useState(false);
  const [isToppingsVisible, setIsToppingsVisible] = useState(false);
  const [isCrustVisible, setIsCrustVisible] = useState(false);
  const [isSizeVisible, setIsSizeVisible] = useState(false);
  const [isSauceVisible, setIsSauceVisible] = useState(false);
  const [allToppings, setAllToppings] = useState<ToppingType[]>([]);
  const [toppingPrice, setToppingPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [
    {
      toppings,
      crusts,
      sizes,
      sauces,
      selectedCrust,
      selectedSauce,
      selectedSize,
      addedToppings,
      selectedPizza
    },
    dispatch
  ] = useContext(CustomPizzaContext);
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatchToCart] = useContext(CartOrderContext);

  useEffect(() => {
    setAllToppings(toppings.filter((item) => item.type === 'veg'));
  }, []);

  useEffect(() => {
    setToppingPrice(addedToppings.reduce((a, b) => a + b.price, 0));
  }, [addedToppings]);

  useEffect(() => {
    setTotalPrice(
      50 +
        toppingPrice +
        (selectedCrust.price ?? 0) +
        (selectedSize.price ?? 0) +
        (selectedSauce.price ?? 0)
    );
  }, [toppingPrice, selectedCrust.price, selectedSize.price, selectedSauce.price]);
  console.log(selectedCrust.price, selectedSize.price, selectedSauce.price);
  const vegTopping = () => {
    setAllToppings(toppings.filter((item) => item.type === 'veg'));
    setShowVeg(true);
    setShowMeat(false);
  };

  const meatTopping = () => {
    setAllToppings(toppings.filter((item) => item.type === 'meat'));
    setShowMeat(true);
    setShowVeg(false);
  };

  const closeToppings = () => {
    setIsToppingsVisible(false);
    setIsCrustVisible(false);
    setIsSizeVisible(false);
    setIsSauceVisible(false);
  };

  const handleAadToCart = async () => {
    dispatchToCart('setOrderToCart', {
      uniqueId: shortid.generate(),
      pizza: selectedPizza,
      quantity: 1,
      price: totalPrice
    } as OrderPizzaType);
    dispatch('cleanToppings');
    navigate('/');
  };

  return (
    <>
      <SideBar />
      <DivMainArea>
        <Header />
        <h2>Custom Your Pizzar</h2>
        <div className="pizz-builder-section">
          <div className="upper-section">
            <div className="your-pizza">
              <h3>{selectedPizza.name}</h3>
              <div className="pizza-card">
                <img src={`/images/pizzas/${selectedPizza.image}`} alt="custom-pizza" />
                {addedToppings.map((topping) => (
                  <img
                    key={topping.name}
                    className="all-tooping"
                    src={`/images/toppings/${topping.image}`}
                    alt={topping.name}
                  />
                ))}
              </div>
              <div className="lower-section">
                <div className="checkout-area">
                  <div className="billing">
                    <h4>PRICE DETAILS</h4>
                    <div className="details">
                      <div className="item">
                        <p>Price</p>
                        <p>
                          <span>$</span>
                          {50}
                        </p>
                      </div>
                      <div className="item">
                        <p>Extra Toppings</p>
                        <p>
                          -<span>$</span>
                          {toppingPrice}
                        </p>
                      </div>
                    </div>
                    <div className="total">
                      <h3>Total</h3>
                      <h3>
                        <span>$</span>
                        {totalPrice}
                      </h3>
                    </div>
                  </div>
                  <button onClick={handleAadToCart} disabled={totalPrice === 0 ? true : false}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className={`topping ${isToppingsVisible && 'expanded'}`}>
                <div
                  className={`add ${isToppingsVisible && 'active'}`}
                  onClick={() => {
                    closeToppings();
                    setIsToppingsVisible(!isToppingsVisible);
                  }}
                >
                  ADD TOPPINGS
                </div>
                <div className="toppings-section">
                  <div className="type-section">
                    <div className={`type ${showVeg && 'active'}`} onClick={vegTopping}>
                      VEG
                    </div>
                    <div className={`type ${showMeat && 'active'}`} onClick={meatTopping}>
                      MEAT
                    </div>
                  </div>
                  {allToppings.map((topping) => (
                    <div
                      onClick={() => dispatch('setAddedToppings', topping)}
                      className={`topping-item ${
                        addedToppings.find((item) => item.name === topping.name) && 'active'
                      }`}
                      key={topping.name}
                    >
                      <p>{topping.name}</p>
                      <p>${topping.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`topping ${isSizeVisible && 'expanded'}`}>
                <div
                  className={`add ${isSizeVisible && 'active'}`}
                  onClick={() => {
                    closeToppings();
                    setIsSizeVisible(!isSizeVisible);
                  }}
                >
                  CHOOSE A SIZE
                </div>
                <div className="toppings-section">
                  {sizes
                    .sort((a, b) => a.id - b.id)
                    .map((size) => (
                      <div
                        onClick={() => dispatch('setSelectedSize', size)}
                        className={`topping-item ${selectedSize.name === size.name && 'active'}`}
                        key={size.name}
                      >
                        <p>{size.name}</p>
                        <p>${size.price}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className={`topping ${isCrustVisible && 'expanded'}`}>
                <div
                  className={`add ${isCrustVisible && 'active'}`}
                  onClick={() => {
                    closeToppings();
                    setIsCrustVisible(!isCrustVisible);
                  }}
                >
                  CHOOSE YOUR CRUST
                </div>
                <div className="toppings-section">
                  {crusts.map((crust) => (
                    <div
                      onClick={() => dispatch('setSelectedCrust', crust)}
                      className={`topping-item ${selectedCrust.name === crust.name && 'active'}`}
                      key={crust.name}
                    >
                      <p>{crust.name}</p>
                      <p>${crust.price}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`topping ${isSauceVisible && 'expanded'}`}>
                <div
                  className={`add ${isSauceVisible && 'active'}`}
                  onClick={() => {
                    closeToppings();
                    setIsSauceVisible(!isSauceVisible);
                  }}
                >
                  CHOOSE YOUR SAUCE
                </div>
                <div className="toppings-section">
                  {sauces.map((sauce) => (
                    <div
                      onClick={() => dispatch('setSelectedSauce', sauce)}
                      className={`topping-item ${selectedSauce.name === sauce.name && 'active'}`}
                      key={sauce.name}
                    >
                      <p>{sauce.name}</p>
                      <p>${sauce.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DivMainArea>
      <LeftSide />
    </>
  );
};

export default CustomPizza;
