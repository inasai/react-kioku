import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import WareBlock from './components/WareBlock';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Усі товари</h2>
          <div class="content__items">
            <WareBlock title="Ware1" price={100} />
            <WareBlock title="Ware2" price={200} />
            <WareBlock title="Ware3" price={300} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
