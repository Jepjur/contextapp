import React, { Component } from 'react';

class BookList extends Component {
  render() { 
    return ( 
            <div className="book-list">
                <ul>
                    <li>The hitchhikers guide to the galaxy</li>
                    <li>The stranger</li>
                    <li>Crime and punishment</li>
                    <li>Pachinko</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;