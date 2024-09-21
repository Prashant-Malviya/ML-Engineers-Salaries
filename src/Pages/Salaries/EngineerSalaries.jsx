import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import MainTable from '../../components/Table/MainTable';
import Pagination from '../../components/Pagination/Pagination';
import AggregatedTable from '../../components/Aggregated Table/AggregatedTable';
import LineGraph from '../../components/Graph/LineGraph'

const Salaries = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [selectedYear, setSelectedYear] = useState(null);
  const [aggregatedData, setAggregatedData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [currentAggPage, setCurrentAggPage] = useState(1);
  const aggItemsPerPage = 5;

  useEffect(() => {
    fetch('/public/data/salaries.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      });
  }, []);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (key === 'work_year' || key === 'salary_in_usd') {
        return direction === 'ascending'
          ? parseInt(a[key]) - parseInt(b[key])
          : parseInt(b[key]) - parseInt(a[key]);
      } else {
        return direction === 'ascending'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
    });
    setData(sortedData);
    setCurrentPage(1);
  };

  const handleRowClick = (year) => {
    setSelectedYear(year);
    const filteredData = data.filter((item) => item.work_year === year);
    const jobCounts = filteredData.reduce((acc, curr) => {
      acc[curr.job_title] = (acc[curr.job_title] || 0) + 1;
      return acc;
    }, {});
    setAggregatedData(Object.entries(jobCounts));
    setCurrentAggPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentData = data.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const aggIndexOfLastItem = currentAggPage * aggItemsPerPage;
  const currentAggData = aggregatedData.slice(aggIndexOfLastItem - aggItemsPerPage, aggIndexOfLastItem);
  const totalAggPages = Math.ceil(aggregatedData.length / aggItemsPerPage);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">ML Engineer Salaries (2020-2024)</h1>

      {/* Main Table */}
      <MainTable
        data={currentData}
        handleSort={handleSort}
        sortConfig={sortConfig}
        handleRowClick={handleRowClick}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={() => setCurrentPage((prev) => prev - 1)}
        handleNextPage={() => setCurrentPage((prev) => prev + 1)}
      />

      {/* Line Graph */}
      <div className="mt-8">
        <LineGraph data={data} />
      </div>

      {/* Aggregated Table */}
      {selectedYear && (
        <AggregatedTable
          selectedYear={selectedYear}
          data={currentAggData}
          currentAggPage={currentAggPage}
          totalAggPages={totalAggPages}
          handleAggPreviousPage={() => setCurrentAggPage((prev) => prev - 1)}
          handleAggNextPage={() => setCurrentAggPage((prev) => prev + 1)}
        />
      )}
    </div>
  );
};

export default Salaries;
