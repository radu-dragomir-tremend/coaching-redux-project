import React, { FC } from 'react';
import { cartActions } from '../app/cart-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Card from './Card';

type Props = {};

const Cart: FC = (props: Props) => {
  const items = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const removeItemHandler = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const addItemHandler = (id: string, title: string, price: number) => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className='item'>
            <header>
              <h3>{item.title}</h3>
              <div className='price'>
                ${item.total}{' '}
                <span className='itemprice'>(${item.price}/item)</span>
              </div>
            </header>
            <div className='details'>
              <div className='quantity'>
                x <span>{item.quantity}</span>
              </div>
              <div className='actions'>
                <button onClick={() => removeItemHandler(item.id)}>-</button>
                <button
                  onClick={() =>
                    addItemHandler(item.id, item.title, item.price)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
