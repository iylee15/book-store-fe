import React from 'react';
import BookItem from './BookItem';
import { Book } from '../types/types';
import './BookList.css';

interface BookListProps {
    books: Book[];
    currentPage: number;
}

const BookList = ({ books, currentPage }: BookListProps) => {

    return (
        <div>
            <h1>도서목록</h1>
            <div className='book-list'>
                <div className="book-list-header">
                    <div className="book-item-row">
                        <span>제목</span>
                        <span>저자</span>
                        <span>출판사</span>
                        <span>발행일</span>
                        <span>가격</span>
                    </div>
                </div>
                {books.map((book) => (
                    <BookItem key = {book.id} book = {book} currentPage = {currentPage}/>
                ))}
            </div>
        </div>
    );
};

export default BookList;