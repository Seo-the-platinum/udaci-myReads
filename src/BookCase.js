import React, { Component } from 'react'
import Shelves from './Shelves.js'

class BookCase extends Component {
  
  state= {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  moveBook= (book, shelf)=> {
    console.log(book)
    this.setState(currState=> ({
     
      })
    )
  }

  componentDidMount() {this.props.getBooks
  .then((data)=> {
    this.setState((currState)=> ({
      books: data
     }))
  const cR= data.filter(book=> (
    book.shelf==='currentlyReading'
  ))
  const wR= data.filter(book=> (
    book.shelf==='wantToRead'
  ))
  const r= data.filter(book=> (
    book.shelf==='read'
  ))
  this.setState(currState=> ({
    currentlyReading: cR,
    wantToRead: wR,
    read: r
  }))
   })
}

  render() {
    const { currentlyReading, wantToRead, read}= this.state
    return(
    <div>
      <Shelves shelf='Currently Reading' books={currentlyReading} moveBook={this.moveBook}/>
      <Shelves shelf='Want to Read' books={wantToRead} moveBook={this.moveBook}/>
      <Shelves shelf='Read' books={read} moveBook={this.moveBook}/>
    </div>
    );
  }
}

export default BookCase