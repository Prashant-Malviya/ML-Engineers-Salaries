import React from 'react';

const AggregatedTable = ({ selectedYear, data, currentAggPage, totalAggPages, handleAggPreviousPage, handleAggNextPage }) => {
  return (
    <div>
      <h3 className="font-bold mb-4 text-center my-5">Job Titles for {selectedYear}</h3>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-center">Job Title</th>
            <th className="py-2 px-4 border-b text-center">Number of Jobs</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([jobTitle, count], index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b text-center">{jobTitle}</td>
              <td className="py-2 px-4 border-b text-center">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 mx-1 border ${currentAggPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100'}`}
          onClick={handleAggPreviousPage}
          disabled={currentAggPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1 border">{`Page ${currentAggPage} of ${totalAggPages}`}</span>
        <button
          className={`px-4 py-2 mx-1 border ${currentAggPage === totalAggPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100'}`}
          onClick={handleAggNextPage}
          disabled={currentAggPage === totalAggPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AggregatedTable;
