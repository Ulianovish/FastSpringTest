import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
import useAuth from '../../hooks/useAuth';
import Spinner from '../../components/Spinner/Spinner';
import { createOrder } from '../../services/OrderService';
import { OrderType } from '../../data/types';
const OrderSummry = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [{ order, selectedAddres }, dispatch] = useContext(CartOrderContext);
  const { auth } = useAuth();

  const handlePlaceOrder = async () => {
    setLoading(true);
    const response = await createOrder(auth.email, order);
    console.log('ORDERPOST', response);
    setLoading(false);
    dispatch('setOrder', {} as OrderType);
    if (response?.id ?? 0 > 0) navigate(`/order/${response.id}`);
  };

  return (
    <>
      <div className="shipping">
        <div className="progress">
          <div className="status">
            <p>Bag</p>
            <div className={`divider`}></div>
            <p className={` ${path === '/shipping' && 'active'}`}>Shipping</p>
            <div className="divider"></div>
            <p className={` ${path === '/payment' && 'active'}`}>Payment</p>
            <div className="divider"></div>
            <p className={` ${path === '/order' && 'active'}`}>Order</p>
          </div>
        </div>
        <div className="shipping-details">
          <div className="address">
            <h3>ORDER SUMMRY</h3>
            <div className="add-sec-area">
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
                        <span>$ </span>
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
          <PriceDetails>
            <button onClick={handlePlaceOrder} disabled={order.price === 0}>
              {loading ? <Spinner /> : 'PLACE ORDER'}
            </button>
          </PriceDetails>
        </div>
      </div>
    </>
  );
};

export default OrderSummry;
