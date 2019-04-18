import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search.js'
import { Route } from 'react-router-dom'
import BookCase from './BookCase.js'


class BooksApp extends React.Component {
  state = {
    books: []
  }

 componentDidMount() { BooksAPI.getAll()
  .then((data)=> {
    this.setState((currState)=> ({
      books: data
     }))
   })
}
 
  render() {
    const { books }= this.state
    return (
      <div className="app">
       <Route path='/search' render={()=> (<Search newSearch={BooksAPI.search}/>)}/>
       <Route exact path='/' render={()=> (<BookCase books={books}/>)}/>
      </div>
    );
  }
}

export default BooksApp
