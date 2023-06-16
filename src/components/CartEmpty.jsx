import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>Кошик порожній</h2>
        <p>
          Поверніться сюди, <br /> коли виберете необхідний вам товар.
        </p>
        <Link class="button button--black" to="/">
          <span>Головна сторінка</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
