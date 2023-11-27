import React, { useContext, useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import {
  CartCard,
  CartImage,
  Delete,
  Handle,
  HandleButton,
  HandleQty,
  ItemQty,
  Price
} from './CartItem.styled';
import { OrderPizzaType } from '../../../data/types';
import { CartOrderContext } from '../../../context/cartOrder/cartOrderContext';
interface CartItemCardProps {
  item: OrderPizzaType;
  isCheckout: boolean;
  index: number;
}

const CartItem = ({ item, isCheckout, index }: CartItemCardProps) => {
  const [quantity, setQuantity] = useState(item.quantity);
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useContext(CartOrderContext);

  useEffect(() => {
    if (item.quantity !== quantity) {
      dispatch('changeQuantity', { index: index, quantity: quantity });
    }
  }, [quantity]);

  return (
    <CartCard isCheckout={isCheckout}>
      <CartImage>
        <img src={`/images/pizzas/${item.pizza.image}`} alt={item.pizza.name} />
      </CartImage>
      <div className="des">
        <h3>{item.pizza.name}</h3>
        <p>quantity</p>
        <Handle>
          <HandleQty>
            <HandleButton onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              <IoMdRemove />
            </HandleButton>
            <ItemQty>{quantity}</ItemQty>
            <HandleButton onClick={() => setQuantity(quantity + 1)}>
              <IoMdAdd />
            </HandleButton>
          </HandleQty>
          <Delete onClick={() => dispatch('removeItem', index)}>
            <MdDelete />
          </Delete>
        </Handle>
      </div>
      <Price>
        <h2>
          <span>$</span>
          {item.price * quantity}
        </h2>
      </Price>
    </CartCard>
  );
};

export default CartItem;
