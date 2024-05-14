import React, { useState } from 'react';

const Search= ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search your recent transactions"
        value={searchTerm}
        onChange={handleChange}
      />
<button onClick={handleClick} style={{ backgroundImage: `url(https://cdn.vectorstock.com/i/1000x1000/66/76/magnifying-glass-search-icon-vector-6096676.webp)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '30px', height: '30px' }}></button>
    </div>
  );
};

export default Search;