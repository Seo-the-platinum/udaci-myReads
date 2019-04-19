import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import { Route } from 'react-router-dom'
import BookCase from './BookCase.js'


class BooksApp extends React.Component {
  
getBooks= BooksAPI.getAll()
 
  render() {
    
    return (
      <div className="app">
       <Route path='/search' render={()=> (<Search newSearch={BooksAPI.search}/>)}/>
       <Route exact path='/' render={()=> (<BookCase getBooks={this.getBooks}/>)}/>
      </div>
    );
  }
}

export default BooksApp
