import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import WareBlock from './components/WareBlock';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6454ba85f803f345762f9c56.mockapi.io/Items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Усі товари</h2>
          <div className="content__items">
            {items.map((obj) => (
              <WareBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
