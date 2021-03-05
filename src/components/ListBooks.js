import React from 'react';
import Bookcase from './BookCase';
import OpenSearchButton from './OpenSearchButton';
import Footer from "./Footer";


const ListBooks = ({ bookshelves, books, onMove } ) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Bookcase bookshelves={bookshelves} books={books} onMove={onMove} />
        <OpenSearchButton />
        <Footer
        myname="Aalole"
        githubUrl="https://github.com/aalole"
        year="2021"
      />
      </div>
    );
  }

export default ListBooks;