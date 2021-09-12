import React from 'react';

const SearchBar = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const clearText = (event) => {
    event.preventDefault();
    setValue('');
  };

  return (
    <div className="searchbar">
      <input
        aria-label="Search list for item"
        type="text"
        placeholder="Search list.."
        onChange={handleChange}
      />
      {value && (
        // eslint-disable-next-line react/button-has-type
        <button type="reset" onClick={clearText}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBar;
