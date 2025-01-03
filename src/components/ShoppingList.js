import React from 'react';
import Item from './Item';

const ShoppingList = ({ items }) => {
  return (
    <ul className="Items">
      {items.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  );
};

export default ShoppingList;
