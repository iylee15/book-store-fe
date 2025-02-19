import { BookSearchProps } from '@/types/types';
import React, { useState } from 'react';
import './Search.css';

const Search: React.FC<BookSearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      onSearch(searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="search-container">
            <div className="search-input-wrapper">
                <input
                    type="text"
                    placeholder="제목 또는 저자명으로 검색"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <svg className="search-icon" viewBox="0 0 24 24" 
                >
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </div>
            <button type="submit" className="search-button">검색</button>
            </form>
        </div>
    );
};

export default Search;