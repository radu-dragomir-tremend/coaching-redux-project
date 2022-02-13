import React, { FC } from 'react';
import { uiActions } from '../app/ui-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const toggleCart = () => dispatch(uiActions.toggle());

  const quantity = useAppSelector((state) => state.cart.totalQuantity);
  return (
    <header className='header'>
      <h1>Redux Books Shopping Cart</h1>
      <button onClick={toggleCart}>
        <span>Cart</span>
        <span className='badge'>{quantity}</span>
      </button>
    </header>
  );
};

export default Navbar;
