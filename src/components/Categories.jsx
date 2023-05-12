import React from 'react';

function Categories({ value, onCategory }) {
  const categories = [
    'Усі товари',
    'Ноутбуки та ПК',
    'Смартфони',
    'Ігрові консолі',
    'TV',
    'Девайси',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((name, i) => (
          <li key={i} onClick={() => onCategory(i)} className={value === i ? 'active' : ''}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
