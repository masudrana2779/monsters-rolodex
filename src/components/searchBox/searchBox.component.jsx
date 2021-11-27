import React from 'react';

import './searchBox.style.css';

const SearchBox = ({placeholder,handelChange}) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={handelChange}
        />
    )
}
export default SearchBox;