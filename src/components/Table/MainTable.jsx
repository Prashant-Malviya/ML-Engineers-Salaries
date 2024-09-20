import React from 'react';
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpShortWide } from "react-icons/fa6";



const MainTable = ({ data, handleSort, sortConfig, handleRowClick }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300 mb-8 table-fixed">
      <thead className="bg-gray-100">
        <tr>
          <th className="w-1/4 py-2 px-4 border-b cursor-pointer text-center" onClick={() => handleSort('work_year')}>
         Year {sortConfig.key === 'work_year' ? (sortConfig.direction === 'ascending' ? <FaArrowUpShortWide /> : <FaArrowDownShortWide />) : ''}
          </th>
          <th className="w-2/4 py-2 px-4 border-b cursor-pointer text-center" onClick={() => handleSort('job_title')}>
            Job Title {sortConfig.key === 'job_title' ? (sortConfig.direction === 'ascending' ?  <FaArrowUpShortWide /> : <FaArrowDownShortWide />) : ''}
          </th>
          <th className="w-1/4 py-2 px-4 border-b cursor-pointer text-center" onClick={() => handleSort('salary_in_usd')}>
            Salary in USD {sortConfig.key === 'salary_in_usd' ? (sortConfig.direction === 'ascending' ?  <FaArrowUpShortWide /> : <FaArrowDownShortWide />) : ''}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center hover:bg-gray-100" onClick={() => handleRowClick(row.work_year)}>
            <td className="py-2 px-4 border-b">{row.work_year}</td>
            <td className="py-2 px-4 border-b">{row.job_title}</td>
            <td className="py-2 px-4 border-b">{row.salary_in_usd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
