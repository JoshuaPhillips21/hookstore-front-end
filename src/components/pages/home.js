import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../book/book';
import AddBook from '../book/addBook';


export default function Home() {
    const [allBooks, setAllBooks] = useState([]);

    const getAllBooks = () => {
        axios.get('http://127.0.0.1:5000/book/get')
        .then(res => {
            setAllBooks(res.data);
        })
        .catch(error => {
            console.log(`An error has occured with your API 'GET' request: ${error}`);
        });
    }

    const renderBooks = () => {
        return allBooks.map(book => {
            return <div key={book.id}><Book book={book}/></div>
        })
    }

    useEffect(() => {
        getAllBooks();
    },[])

    
    return (
        <div>
            <div>{renderBooks()}</div>
            <AddBook />
        </div>
    )
}