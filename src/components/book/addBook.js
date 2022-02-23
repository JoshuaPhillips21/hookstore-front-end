import React, { useState } from 'react';

export default function AddBook(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [review, setReview] = useState("");
    const [genre, setGenre] = useState("");


    
        return (
           <form>
                <div>
                <input type='text' placeholder='title' name='title' onChange={(e) => setTitle(e.target.value)} />
                <input type='text' placeholder='author' name='author' onChange={(e) => setAuthor(e.target.value)} />
                <input type='text' placeholder='review' name='review' onChange={(e) => setReview(e.target.value)} />
                <input type='text' placeholder='genre' name='genre' onChange={(e) => setGenre(e.target.value)} />
            </div>

            <button type='sumbit'>Submit</button>
           </form>
        );
    }