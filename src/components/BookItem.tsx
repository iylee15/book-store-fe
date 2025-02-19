import { Book } from '@/types/types';
import React from 'react';
import './BookItem.css';

const BookItem = ({book} : {book: Book}) => { // id, 제목, 저자, 출판사, 출판일, 가격
    return (
        <div className='book-item'>
            <div className="book-item-row">
                <div className='book-title'>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.publisher}</div>
                <div>{book.pubDate}</div>
                <div>{book.price}</div>
            </div>
        </div>
    );
};

export default BookItem;