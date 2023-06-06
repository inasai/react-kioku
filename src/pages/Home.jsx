import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import WareBlock from '../components/WareBlock/Ware';
import Skeleton from '../components/WareBlock/Skeleton';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';
import { setCategories } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { categories, sort } = useSelector((state) => state.filter);

  const { searchVal } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState([true]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategoties = (id) => {
    dispatch(setCategories(id));
  };

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
  }, [categories, sort.sortProperty, searchVal, currentPage]);

  const wares = items.map((obj) => <WareBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(5)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categories} onCategory={onChangeCategoties} />
        <Sort />
      </div>
      <h2 className="content__title">Усі товари</h2>
      <div className="content__items">{isLoad ? skeletons : wares}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
