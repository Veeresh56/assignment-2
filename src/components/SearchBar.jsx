import {useState} from 'react';

function SearchBar() {
    const[searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    return(
    <div className="point-box">
      <h2>Search Bar</h2>
      <input className="app-input" type="text" onChange={handleInputChange} placeholder="Search..."/>
      <p className="result-text">Uppercase Output: {searchText.toUpperCase()}</p>
    </div>
  );
}

export default SearchBar;