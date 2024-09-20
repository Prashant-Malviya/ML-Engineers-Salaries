import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage }) => {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`px-4 py-2 mx-1 border ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100'}`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-1 border">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className={`px-4 py-2 mx-1 border ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100'}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
