import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';
const Payment = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const [, setPaymentType] = useState('COD');
  const [{ order }] = useContext(CartOrderContext);
  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
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
          <h3>Select Payment type</h3>
          <div className="payments-opts">
            <div className="payment-method">
              <div className="select-opt" onClick={() => setPaymentType('COD')}>
                <input type="radio" value="COD" name="payment" id="cod" checked />
                <label htmlFor="cod">CASH ON DELIVERY</label>
              </div>
            </div>
          </div>
        </div>
        <PriceDetails>
          <button onClick={handlePlaceOrder} disabled={order.price === 0}>
            CONTINUE
          </button>
        </PriceDetails>
      </div>
    </div>
  );
};

export default Payment;
