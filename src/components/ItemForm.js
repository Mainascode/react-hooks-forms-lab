import React, { useState } from 'react';

const ItemForm = ({ onItemFormSubmit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !category) return; // Prevent submission if fields are empty.

    const newItem = {
      id: Date.now().toString(), // Simple unique id based on timestamp
      name,
      category,
    };

    onItemFormSubmit(newItem); // Call the callback to add the new item
    setName('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      
      <label htmlFor="category">Category</label>
      <input
        id="category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter item category"
      />
      
      <button type="submit">Add to List</button>
    </form>
  );
};

export default ItemForm;
