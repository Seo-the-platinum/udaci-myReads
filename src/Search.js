import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class Search extends Component {
  
  state= {
    query: '',
    results: [],
  }
  updateQuery= (query)=> {
    this.setState((currState)=> ({
      query: query,
    }))
    this.props.newSearch(query)
    .then((data)=> {this.setState((currState)=> ({
       results: data,
    }))})

  }
    
  render() {
    const { query, results }= this.state
    return(
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search' >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} 
                  onChange={(event)=> {this.updateQuery(event.target.value)}} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {results.map((result)=> {
                  return(
                  <Book image={result.imageLinks ? (result.imageLinks.smallThumbnail): 
                  (`http://via.placeholder.com/128x193?text=?`)} title={result.title} authors={result.authors} id={result.id}/>
                )})}
              </ol>
            </div>
          </div>
    );
  }
}

export default Search