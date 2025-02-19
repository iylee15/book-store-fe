'use client'

import React, { useEffect, useState } from 'react';
import { Book } from '../../types/types';
import { getBooks } from '@/api/book';
import BookList from '@/components/BookList';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';
import { StyleSheet } from '@/ui/ui';

const MainPage = () => {
    // const api = axios.create({baseURL:"http://localhost:9000/api"})
    const [bookList, setBookList] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const handleSearch = (searchTerm: string) => {
        console.log('Searching for: ', searchTerm);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBooks();
                setBookList(response);
            } catch (error) {
                console.error("Error fetching books: ", error);
            }
        }
        
        fetchBooks();
    }, []);
    return (
        <div>
            {/* <Header/> */}
            <BookList books = {bookList}/>
            <StyleSheet /> {/* 스타일 적용 */}
            <Search onSearch={handleSearch} />
            <Pagination totalPages={10} currentPage={currentPage} onPageChange={handlePageChange} itemsPerPage={itemsPerPage} onItemsPerPageChange={setItemsPerPage}/>
        </div>
    );
};

export default MainPage;