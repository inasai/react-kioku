import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import WareBlock from '../components/WareBlock/Ware';
import Skeleton from '../components/WareBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState([true]);

  React.useEffect(() => {
    fetch('https://6454ba85f803f345762f9c56.mockapi.io/Items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoad(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Усі товари</h2>
      <div className="content__items">
        {isLoad
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <WareBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
