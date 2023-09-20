import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    setSearch('');
    let value = search.trim().replace(/\s+/g, '-').toLocaleLowerCase();
    navigate(`/search/${value}`);
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    const menuCheckbox = document.getElementById('menu-btn');
    if (menuCheckbox) {
      menuCheckbox.checked = false;
    }
  }

  return (
    <form className='search' onSubmit={handleSearch}>
      <input
        type="search"
        placeholder='Search tourist spots'
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type='submit'
        className='search-button'
        onClick={closeMobileMenu} // Close the mobile menu when the button is clicked
      >
        <i className='fa fa-search'></i>
      </button>
    </form>
  );
};

export default Search;
