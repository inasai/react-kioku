import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import WareBlock from '../components/WareBlock/Ware';
import Skeleton from '../components/WareBlock/Skeleton';
import Pagination from '../components/pagination';
import { SearchContext } from '../App';
import { setCategories } from '../redux/slices/filterSlice';
import { useActions } from '../hooks/useActions';

const Home = () => {
  const dispatch = useDispatch();
  const { categories, sort } = useSelector((state) => state.filter);
  const { wares } = useSelector((state) => state.wares);
  const { fetchDevices } = useActions();

  const { searchVal } = React.useContext(SearchContext);

  const [isLoad, setIsLoad] = React.useState([true]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategoties = (id) => {
    dispatch(setCategories(id));
  };

  useEffect(() => {
    setIsLoad(true);

    const category = categories > 0 ? `category=${categories}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchVal ? `&search=${searchVal}` : '';

    fetchDevices(currentPage, category, sortBy, order, search).then(() => {
      setIsLoad(false);
      window.scrollTo(0, 0);
    })
  }, [categories, sort.sortProperty, searchVal, currentPage]);

  const items = wares.map((obj) => <WareBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(5)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categories} onCategory={onChangeCategoties} />
        <Sort />
      </div>
      <h2 className="content__title">Усі товари</h2>
      <div className="content__items">{isLoad ? skeletons : items}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
