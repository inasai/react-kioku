import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import WareBlock from '../components/WareBlock/Ware';
import Skeleton from '../components/WareBlock/Skeleton';
import Pagination from '../components/pagination';

const Home = ({ searchVal }) => {
  const [items, setItems] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState([true]);
  const [categories, setCategories] = React.useState(0);
  const [sort, setSort] = React.useState({
    name: 'популярне',
    sortProperty: 'rating',
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setIsLoad(true);

    const category = categories > 0 ? `category=${categories}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchVal ? `&search=${searchVal}` : '';

    fetch(
      `https://6454ba85f803f345762f9c56.mockapi.io/Items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoad(false);
      });
    window.scrollTo(0, 0);
  }, [categories, sort, searchVal, currentPage]);

  const wares = items.map((obj) => <WareBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(5)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categories} onCategory={(i) => setCategories(i)} />
        <Sort value={sort} onSort={(i) => setSort(i)} />
      </div>
      <h2 className="content__title">Усі товари</h2>
      <div className="content__items">{isLoad ? skeletons : wares}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
