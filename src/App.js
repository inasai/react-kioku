import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import './scss/app.scss';
import { Admin, Cart, Home, NotFound, WarePage } from './pages';

export const SearchContext = React.createContext('');

function App() {
  const [searchVal, setSearchVal] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchVal, setSearchVal }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ware/:id" element={<WarePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
