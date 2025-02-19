// 책 데이터 
export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    publisher: string;
    pubDate: string;
    description: string;
    stock: number;
    isbn: string;
    link: string;
    image: string;
}

export interface BookSearchProps {
    onSearch: (searchTerm: string) => void;
  }

export interface BookListProps {
    books: Book[];
    itemsPerPage: number;
}
  
export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
}