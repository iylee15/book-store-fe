'use client'

import React, { useEffect, useState } from 'react';
import { Book } from '../../types/types';
import { getBooks } from '@/api/book';
import BookList from '@/components/BookList';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';
import { StyleSheet } from '@/ui/ui';

const MainPage = () => {
    const [bookList, setBookList] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 10; 

    const fetchBooks = async () => {
        setIsLoading(true);
        try {
            const response = await getBooks();
            setBookList(response);
        } catch (error) {
            console.error("Error fetching books: ", error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSearch = (searchTerm: string) => {
        console.log('Searching for: ', searchTerm);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const currentBooks = bookList.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    return (
        <div>
            {isLoading ? (
                <div>로딩 중...</div>
            ) : (
                <>
                    {/* <Header/> */}
                    <BookList books = {currentBooks}/>
                    <StyleSheet /> {/* 스타일 적용 */}
                    <Search onSearch={handleSearch} />
                    <Pagination totalPages={Math.ceil(bookList.length/itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} itemsPerPage={itemsPerPage}/>
                </>
            )}
        </div>
    );
};

export default MainPage;