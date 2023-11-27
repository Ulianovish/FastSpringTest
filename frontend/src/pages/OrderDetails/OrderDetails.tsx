import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import OrderDetail from '../../skeleton/OrderDetail';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import useAuth from '../../hooks/useAuth';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import Message from '../../components/Message/Message';
const OrderDetails = () => {
  const [{ order, selectedAddres }] = useContext(CartOrderContext);
  const { auth } = useAuth();
  const params = useParams();
  const [show, setShow] = useState(true);
  const { id } = params;
  return (
    <>
      <div className="shipping">
        <SideBar />
        <div className="shipping-details">
          <div className="address">
            <h3>ORDER DETAILS</h3>
            <div className="add-sec-area">
              <h4 style={{ margin: '20px 0' }}>Order ID:{id}</h4>
              <h4>Shipping</h4>
              {selectedAddres && (
                <div className={`og-add`}>
                  <p>{auth.name}</p>
                  <span>
                    {selectedAddres.address},{selectedAddres.town}
                  </span>
                  <span>
                    {selectedAddres.city},{selectedAddres.state}{' '}
                  </span>
                  <span>
                    <b>Mobile No:</b>
                    {auth.phone}
                  </span>
                </div>
              )}
            </div>
            <h4>Products</h4>
            <div className="cart-area">
              <div className="all-items">
                {order?.orderPizza?.map((item) => (
                  <div className="cart-card" key={item.uniqueId}>
                    <div className="img">
                      <img src={`/images/pizzas/${item.pizza.image}`} alt={item.pizza.name} />
                    </div>
                    <div className="des">
                      <h3>{item.pizza.name}</h3>
                      <p>qty:{item.quantity}</p>
                    </div>
                    <div className="price">
                      <h2>
                        <span>$</span>
                        {item.price}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h4>Payment Method</h4>
            <div className="payments-opts">
              <div className="payment-method">
                <div className="select-opt">
                  <label htmlFor="cod">CASH ON DELIVERY</label>
                </div>
              </div>
            </div>
          </div>
          <PriceDetails>{}</PriceDetails>
        </div>
      </div>
      <Message
        showModal={show}
        msg={'Order Placed Successfuly'}
        img={
          'https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg?compress=1&resize=400x300'
        }
        type="error"
        closeModal={setShow}
      />
    </>
  );
};
export default OrderDetails;
