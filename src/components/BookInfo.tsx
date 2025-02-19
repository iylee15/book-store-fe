import { Book } from '@/types/types';
import React from 'react';
import './BookInfo.css';

const BookInfo = ({book}: {book: Book}) => {
    return (
        <div className='BookInfo'>
            <div><img src={ book.image } width="300px"/></div>
            <div className='detail'>
                <div className='title'>{book.title}</div>
                <hr />
                <div className='auth-info'>
                    <span>저자 : {book.author}</span>
                    <span>출판사 : {book.publisher}</span>
                </div>
                <div>책 소개</div><br />
                <div>{book.description}</div>
            </div>
        </div>
    );
};

export default BookInfo;