import React, { Component } from 'react'
import Shelves from './Shelves.js'

class BookCase extends Component {
  
  state= {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  
 componentDidMount(){
    const {books}= this.props
  const cR= books.filter(book=> (
    book.shelf=== 'currentlyReading'
  ))
  const wR= books.filter(book=> (
    book.shelf=== 'wantToRead'
  ))
  const r= books.filter(book=> (
    book.shelf==='read'
  ))
  this.setState(currState=> ({
    currentlyReading: cR,
    wantToRead: wR,
    read: r,
  }))
}


  render() {
    const { currentlyReading, wantToRead, read}= this.state
    return(
    <div>
      <Shelves shelf='Currently Reading' books={currentlyReading}/>
      <Shelves shelf='Want to Read' books={wantToRead}/>
      <Shelves shelf='Read' books={read}/>
    </div>
    );
  }
}

export default BookCase