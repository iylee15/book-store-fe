'use client'

import React, { useEffect, useState } from 'react';
import { Book } from '../../types/types';
import { getBooks } from '@/api/book';
import BookList from '@/components/BookList';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';

const MainPage = () => {
    const [bookList, setBookList] = useState<Book[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [isSearching, setIsSearching] = useState(false);
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
        if (!searchTerm.trim()) {
            setIsSearching(false); 
            setCurrentPage(1);
            return;
        }

        setIsSearching(true);
        const searchResult = bookList.filter((book) => {
            const searchLower = searchTerm.toLowerCase();
            return (
                book.title.toLowerCase().includes(searchLower) ||
                book.author.toLowerCase().includes(searchLower)
            );
        });

        setFilteredBooks(searchResult);
        setCurrentPage(1); 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const currentBooks = isSearching 
        ? filteredBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : bookList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            {isLoading ? (
                <div>로딩 중...</div>
            ) : (
                <>
                    <BookList books = {currentBooks}/>
                    <Search onSearch={handleSearch} />
                    <Pagination totalPages={Math.ceil(bookList.length/itemsPerPage)} currentPage={currentPage} onPageChange={handlePageChange} itemsPerPage={itemsPerPage}/>
                </>
            )}
        </div>
    );
};

export default MainPage;