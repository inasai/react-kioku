import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItem } from '../../redux/slices/cartSlice';

function WareBlock({ id, title, price, image, types }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items).find((obj) => obj.id === id);
  const navigate = useNavigate();
  const [activeType, setActiveType] = React.useState(0);
  const typeNames = ['Type1', 'Type2', 'Type3'];

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const items = {
      id,
      title,
      price,
      image,
    };
    dispatch(addItem(items));
  };

  const goToWare = () => {
    navigate('/ware/' + id);
  };

  return (
    <div className="ware-block-wrapper" onClick={goToWare}>
      <div className="ware-block">
        <div className="ware-block__image">
          <img src={image} alt="Ware" />
        </div>
        <h4 className="ware-block__title">{title}</h4>
        <div className="ware-block__selector">
          <ul>
            {/* {types.map((types) => (
              <li
                key={types}
                onClick={() => setActiveType(types)}
                className={activeType === types ? 'active' : ''}>
                {typeNames[types]}
              </li>
            ))} */}
            {types}
          </ul>
        </div>
        <div className="ware-block__bottom">
          <div className="ware-block__price">{price} ₴</div>
          <button
            className="button button--outline button--add"
            onClick={(e) => {
              e.stopPropagation();
              onClickAdd();
            }}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Додати</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WareBlock;
