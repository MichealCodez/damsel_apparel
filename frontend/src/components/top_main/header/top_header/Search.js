import { useState } from "react";
import { assets } from "../../../../utils";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  function handleclick() {
    setShowSearch(true);
  }
  return (
    <div className="search">
      {showSearch && (
        <input
          type="text"
          className="search-input"
          name="search"
          placeholder="Search..."
        />
      )}
      <img
        className="search-icon"
        src={`${assets}/icons/search_icon.svg`}
        alt="search icon"
        onClick={handleclick}
      />
    </div>
  );
}

export default Search;
