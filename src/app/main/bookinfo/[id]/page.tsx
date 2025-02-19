'use client'

import { getBook } from '@/api/book';
import BookInfo from '@/components/BookInfo';
import { Book } from '@/types/types';
import React, { useEffect, useState } from 'react';
import './BookInfoPage.css';

const BookInfoPage = ({ params }) => {
    const [book, setBook] = useState<Book | null>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = params;

    const fetchBook = async () => {
        if (!id) {
            setError('책 ID가 없습니다.');
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            console.log("getbook 호출, id: ", id);
            const response = await getBook(Number(id));
            if(response) {
                setBook(response);
            } else {
                setError('책을 찾을 수 없습니다.');
            }
        } catch (error) {
            setError('책 정보를 불러오던 중 오류가 발생했습니다.');
            console.error("Error fetching book:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log("ID from params :", id);
        fetchBook();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!book) return <div>책을 찾을 수 없습니다.</div>;

    return (
        <div>
            <h1>도서 상세 정보</h1>
            <BookInfo book = {book}/>
        </div>
    );
};

export default BookInfoPage;