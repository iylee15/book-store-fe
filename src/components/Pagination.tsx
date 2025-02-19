import './Pagination.css';
import { PaginationProps } from '@/types/types';

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage,  onPageChange}) => {
    const renderPaginationButtons = () => {
    const buttons = [];
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <button key={i} className={`pagination-button ${currentPage === i ? 'active' : ''}`} onClick={() => onPageChange(i)}>
            {i}
          </button>
        );
      }
      return buttons;
    };

    return (
        <div className="pagination-container">
            <div className="pagination-buttons">
                <button
                className="pagination-button nav-button"
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                >
                ←
                </button>
                {renderPaginationButtons()}
                <button
                className="pagination-button nav-button"
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                >
                →
                </button>
            </div>
        </div>
    );
};

export default Pagination;