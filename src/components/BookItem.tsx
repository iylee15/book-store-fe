import { Book } from '@/types/types';
import React from 'react';
import './BookItem.css';
import { useRouter } from 'next/navigation';

const BookItem = ({book, currentPage} : {book: Book, currentPage: number}) => { // id, 제목, 저자, 출판사, 출판일, 가격
    const router = useRouter();
    const handleOnClick = () => {
        router.push(`/main/bookinfo/${book.id}?returnPage=${currentPage}`);
    }
    console.log("책id ", book.id);

    return (
        <div className='book-item'>
            <div className="book-item-row" onClick={handleOnClick}>
                <div className='book-title'>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.publisher}</div>
                <div>{book.pubDate}</div>
                <div>{book.price.toLocaleString()}원</div>
            </div>
        </div>
    );
};

export default BookItem;