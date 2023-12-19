import { useState } from "react";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  function handleclick() {
    setShowSearch(true);
  }
  return (
    <div id="search">
      {showSearch && (
        <input type="text" className="search-input" name="search" />
      )}
      <img
        className="search-icon"
        src={`${process.env.PUBLIC_URL}/assets/icons/search_icon.png`}
        alt="search icon"
        onClick={handleclick}
      />
    </div>
  );
}

export default Search;
