

import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

class App extends Component {
  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ];
  state = {
    myBooks: [],
    searchBooks: [],
  };
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books });
    });
  };
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.myBooks.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      myBooks: updatedBooks,
    });
  };
  searchForBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { myBooks, searchBooks } = this.state;
    return (
      <div className="app">
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              books={myBooks}
              onMove={this.moveBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              myBooks={myBooks}
              onSearch={this.searchForBooks}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </Router>
      </div>
    );
  }
}

export default App;
