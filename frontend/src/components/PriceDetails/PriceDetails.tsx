import { ReactNode, useContext } from 'react';
import { Billing, CheckoutArea, Details, ItemCart, Total } from '../../pages/Cart/Cart.styled';
import { CartOrderContext } from '../../context/cartOrder/cartOrderContext';

interface PriceDetailsProps {
  children: ReactNode;
}

const PriceDetails = ({ children }: PriceDetailsProps) => {
  const [{ order }] = useContext(CartOrderContext);
  const deleviryPrice = order.price > 70 ? 0 : 12;
  const totalPrice = order.price + deleviryPrice;
  return (
    <CheckoutArea>
      <Billing>
        <h4>PRICE DETAILS</h4>
        <Details>
          <ItemCart>
            <p>Price</p>
            <p>
              <span>$</span>
              {order.price}
            </p>
          </ItemCart>

          <ItemCart>
            <p>Delivery Charges</p>
            <p>
              {deleviryPrice === 0 ? (
                <span className="free">Free</span>
              ) : (
                <span>${deleviryPrice}</span>
              )}
            </p>
          </ItemCart>
        </Details>
        <Total>
          <h3>Total</h3>
          <h3>
            <span>$</span>
            {totalPrice}
          </h3>
        </Total>
      </Billing>
      {children}
    </CheckoutArea>
  );
};

export default PriceDetails;
