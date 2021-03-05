import React from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

const SearchBooks = ({
  searchBooks,
  myBooks,
  onSearch,
  onResetSearch,
  onMove,
}) => {
  return (
    <div className="search-books">
      <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />
      <SearchResults
        searchBooks={searchBooks}
        myBooks={myBooks}
        onMove={onMove}
      />
    </div>
  );
};

export default SearchBooks;
