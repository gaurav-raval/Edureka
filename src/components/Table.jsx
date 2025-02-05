import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import * as XLSX from "xlsx"; // Import XLSX for Excel export

const Table = () => {
  const data = useSelector((state) => state.table.data) || [];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // State for sorting
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // State for filtering
  const [search, setSearch] = useState("");

  // Column Definitions (Ensure key names match data object keys)
  const columns = [
    { label: "Account Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "id" },
    { label: "Website", key: "website" },
    { label: "Industry", key: "industry" },
    { label: "Status", key: "status" },
    { label: "Remark", key: "remark" },
  ];

  // Handle Sorting
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }
    setSortConfig({ key, direction });
  };

  // Sorting Logic
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  // Filtering Logic
  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((val) => String(val).toLowerCase().includes(search.toLowerCase()))
    );
  }, [data, search]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
const paginatedData = useMemo(() => {
  return filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
}, [filteredData, currentPage, rowsPerPage]);

  // Handle Page Navigation
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  // Export Data to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData); // Convert filtered data to sheet
    const wb = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(wb, ws, "Table Data"); // Append sheet to workbook
    XLSX.writeFile(wb, "table_data.xlsx"); // Download file
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Profile list</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Export Button */}
      <button
        onClick={exportToExcel}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Export to Excel
      </button>

      <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100 text-left">
        {columns.map((col) => (
          <th key={col.key} className="p-2 border cursor-pointer" onClick={() => requestSort(col.key)}>
            {col.label}
            {sortConfig.key === col.key ? (
              sortConfig.direction === "asc" ? <FaSortUp className="inline ml-2" /> : <FaSortDown className="inline ml-2" />
            ) : (
              <FaSort className="inline ml-2" />
            )}
          </th>
        ))}
        <th className="p-2 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {paginatedData.length > 0 ? (
        paginatedData.map((row, index) => (
          <tr key={index} className="border-b hover:bg-gray-50 text-sm md:text-base">
            <td className="p-2 border">{row.name}</td>
            <td className="p-2 border">{row.email}</td>
            <td className="p-2 border">{row.id}</td>
            <td className="p-2 border">{row.website}</td>
            <td className="p-2 border">{row.industry}</td>
            <td className="p-2 border">{row.status}</td>
            <td className="p-2 border">{row.remark}</td>
            <td className="p-2 border"><button>...</button></td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8} className="p-4 text-center">No data available</td>
        </tr>
      )}
    </tbody>
  </table>
</div>


      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50" onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
