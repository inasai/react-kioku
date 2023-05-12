import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import WareBlock from '../components/WareBlock/Ware';
import Skeleton from '../components/WareBlock/Skeleton';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState([true]);
  const [categories, setCategories] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: 'популярне',
    sortProperty: 'rating&order=desc',
  });

  React.useEffect(() => {
    setIsLoad(true);

    const categoryBy = categories > 0 ? `category=${categories}` : '';

    fetch(
      `https://6454ba85f803f345762f9c56.mockapi.io/Items?${categoryBy}&sortBy=${sort.sortProperty}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoad(false);
      });
    window.scrollTo(0, 0);
  }, [categories, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categories} onCategory={(i) => setCategories(i)} />
        <Sort value={sort} onSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Усі товари</h2>
      <div className="content__items">
        {isLoad
          ? [...new Array(5)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <WareBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
