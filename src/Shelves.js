import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js'

class Shelves extends Component {
  render(){
    const { shelf }= this.props
    const { books }= this.props
   return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { books.map((book)=> (
                     <Book image={book.imageLinks ? (book.imageLinks.smallThumbnail): 
                  (`http://via.placeholder.com/128x193?text=?`)} title={book.title} authors={book.authors} id={book.id}/>
                    ))
                    }
                    </ol>
                   </div>
                  </div>
                </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
   );
  }
}

export default Shelves