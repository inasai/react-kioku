import React, { useEffect, useState } from 'react';
import { Input } from '../components/ui/Inputs';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import Pagination from '../components/pagination';
import { getLimitedText } from '../helpers';

const Admin = () => {
  const { fetchDevices } = useActions();
  const { categories, sort } = useSelector((state) => state.filter);
  const { wares } = useSelector((state) => state.wares);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [types, setTypes] = useState('');
  const [image, setImage] = useState('');

  const { addDevice, deleteDevice } = useActions();

  const handleAddDevice = (e) => {
    e.preventDefault();
    addDevice(image, title, types, price, category, rating);
  };

  const handleDeleteWare = (id) => {
    deleteDevice(id);
  };

  useEffect(() => {
    const category = categories > 0 ? `category=${categories}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    fetchDevices(currentPage, category, sortBy, order).then(() => {
      window.scrollTo(0, 0);
    });
  }, [currentPage]);

  return (
    <div className="admin" id="admin">
      <div className="admin__inner">
        <div className="admin__form-container">
          <form className="admin__form" onSubmit={handleAddDevice}>
            <div className="admin__form-fields">
              <div className="admin__form-field">
                <Input
                  placeholder="Зображення..."
                  name="image"
                  value={image}
                  onChange={(value) => setImage(value)}
                />
              </div>
              <div className="admin__form-field">
                <Input
                  placeholder="Назва..."
                  name="name"
                  value={title}
                  onChange={(value) => setTitle(value)}
                />
              </div>
              <div className="admin__form-field">
                <Input
                  placeholder="Ціна..."
                  name="price"
                  value={price}
                  onChange={(value) => setPrice(value)}
                />
              </div>
              <div className="admin__form-field">
                <Input
                  placeholder="Категорія..."
                  name="category"
                  value={category}
                  onChange={(value) => setCategory(value)}
                />
              </div>
              <div className="admin__form-field">
                <Input
                  placeholder="Тип..."
                  name="types"
                  value={types}
                  onChange={(value) => setTypes(value)}
                />
              </div>
              <div className="admin__form-field">
                <Input
                  placeholder="Оцінка..."
                  name="types"
                  value={rating}
                  onChange={(value) => setRating(value)}
                />
              </div>
            </div>
            <div className="admin__form-btn">
              <button
                className="button button--outline button--add"
                onClick={(e) => e.stopPropagation()}
                type="submit">
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
                <span>Створити</span>
              </button>
            </div>
          </form>
          <div className="admin__wares">
            <div className="admin__wares-blocks">
              {wares.map((ware) => {
                return (
                  <div key={ware.id} className="admin__wares-block">
                    <div className="admin__wares-block__img">
                      <img src={ware.image} alt="ware-image" />
                    </div>
                    <div className="admin__wares-block__info">
                      <h4>{getLimitedText(ware.title)}</h4>
                      <button
                        className="button button--outline button--minus"
                        onClick={() => handleDeleteWare(ware.id)}
                        type="submit">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E"></path>
                          <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E"></path>
                        </svg>
                        <span>Видалити</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
