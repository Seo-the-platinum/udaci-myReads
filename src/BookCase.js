import React, { Component } from 'react'
import Shelves from './Shelves.js'

class BookCase extends Component {
  
  state= {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
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
      <Shelves shelf='Currently Reading' books={currentlyReading}/>
      <Shelves shelf='Want to Read' books={wantToRead}/>
      <Shelves shelf='Read' books={read}/>
    </div>
    );
  }
}

export default BookCase