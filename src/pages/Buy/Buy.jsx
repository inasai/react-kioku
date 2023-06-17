import React, { useState } from 'react';

import styles from './Buy.module.scss';
import CartItem from '../../components/CartAnItem';
import { useSelector } from 'react-redux';

function Buy() {
  const [user, setUser] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [mail, setMail] = useState('');
  const [town, setTown] = useState('');
  const [obl, setObl] = useState('');
  const [adress, setAdress] = useState('');
  const [orderList, setOrderList] = useState([]);

  const { totalPrice, items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handleNumberPhoneChange = (e) => {
    setNumberPhone(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };
  const handleTownChange = (e) => {
    setTown(e.target.value);
  };
  const handleOblChange = (e) => {
    setObl(e.target.value);
  };
  const handleAdressChange = (e) => {
    setAdress(e.target.value);
  };

  const handleOrderSubmit = () => {
    const newOrder = { user, numberPhone, mail, town, obl, adress };
    setOrderList([...orderList, newOrder]);
    setUser('');
    setNumberPhone('');
    setMail('');
    setTown('');
    setObl('');
    setAdress('');
  };

  return (
    <div>
      <h1>Оформлення замовлень</h1>

      <div className={styles.wrapper}>
        <div className={styles.root}>
          <div className={styles.group}>
            <input
              className={styles.input}
              type="text"
              value={user}
              onChange={handleUserChange}
              placeholder="ФІО"
            />
            <input
              className={styles.input}
              type="text"
              value={numberPhone}
              onChange={handleNumberPhoneChange}
              placeholder="Номер телефону"
            />
            <input
              className={styles.input}
              type="text"
              value={mail}
              onChange={handleMailChange}
              placeholder="Електрона пошта"
            />
          </div>

          <div className={styles.group}>
            <input
              className={styles.input}
              type="text"
              value={town}
              onChange={handleTownChange}
              placeholder="Місто"
            />
            <input
              className={styles.input}
              type="text"
              value={obl}
              onChange={handleOblChange}
              placeholder="Область/район"
            />
            <input
              className={styles.input}
              type="text"
              value={adress}
              onChange={handleAdressChange}
              placeholder="Відділення НП/код"
            />
          </div>
        </div>
      </div>

      <div>
        <h2>Список товарів</h2>
        {orderList.map((order, index) => (
          <div key={index}>
            <p>{order.user}</p>
            <p>{order.numberPhone}</p>
            <p>{order.mail}</p>
            <p>{order.town}</p>
            <p>{order.obl}</p>
            <p>{order.adress}</p>
          </div>
        ))}
      </div>
      <div class="content__items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span>
            {' '}
            Усього: <b>{totalCount} шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сума: <b>{totalPrice} ₴</b>{' '}
          </span>
        </div>
      </div>
      <button
        className={`button button--outline ${styles.button} ${styles.centerButton}`}
        onClick={handleOrderSubmit}
        type="submit">
        <span>Підтвердити замовлення</span>
      </button>
    </div>
  );
}

export default Buy;
