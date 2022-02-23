import React from 'react';

export default function Book(props) {
    const{id, title, author, review, genre} = props.book;


        return (
            <div key="{id}">
                <h1>{title}</h1>
                <h3>{author}</h3>
                <h6>{review}</h6>
                <h6>{genre}</h6>
            </div>
        );
    }