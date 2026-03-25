import {useState} from 'react';

function SearchBar() {
    const[searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }

    return(
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Search Bar</h2>
            <input type = "text" onChange={handleInputChange} placeholder='Search...' />
            <p>Uppercase Output: {searchText.toUpperCase()}</p>
        </div>
    );
}

export default SearchBar;