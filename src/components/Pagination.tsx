import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => onPageChange(i)}>
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="max-w-sm mx-auto mt-4 flex justify-center">
      {renderPages()}
    </div>
  );
};

export default Pagination;
