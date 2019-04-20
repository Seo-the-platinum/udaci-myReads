import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI.js'

class Book extends Component {
    
  handleChange= (event)=> {
      const shelf= event.target.value
      const id= this.props
      const { book }= this.props
      BooksAPI.update(id,shelf).then(res=> this.props.moveBook(book,shelf, res))
      
    }
  
  render() {
    const {image, authors, title, id}= this.props
 
    
    return(
       <li key={id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>
             </div>
             <div className="book-shelf-changer">
               <select onChange={this.handleChange} value={this.props.book.shelf}>
                 <option value="move" disabled>Move to...</option>
                   <option value="currentlyReading">Currently Reading</option>
                   <option value="wantToRead">Want to Read</option>
                   <option value="read">Read</option>
                   <option value="none">None</option>
                 </select>
               </div>
             </div>
             <div className="book-title">{title}</div>
             <div className="book-authors">{authors}</div>
           </div>
       </li>
    );
  }
}

export default Book