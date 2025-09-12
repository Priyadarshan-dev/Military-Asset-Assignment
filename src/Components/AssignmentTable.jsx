import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function AssignmentTable({ filters }) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;

    // 🔹 Apply filters and map searchQuery to 'search'
    const queryParams = new URLSearchParams({
      sortBy: "startDate",
      sortOrder: "desc",
      limit: itemsPerPage,
      skip,
      ...filters,
      ...(filters.searchQuery && { search: filters.searchQuery }), // ✅ search works now
    });

    fetchWithAuth(
      `https://servermms.onrender.com/api/assignments?${queryParams.toString()}`
    )
      .then((json) => {
        setData(json);
        setTotalItems(json.total || json.count || 0);
      })
      .catch((err) => console.error(err));
  }, [currentPage, itemsPerPage, filters]);

  if (!data) return <p>Loading...</p>;

  const assignmentArray = Array.isArray(data)
    ? data
    : data.assignments || data.data || [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full bg-white shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ASSET</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">BASE</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ASSIGNED TO</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">QUANTITY</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PURPOSE</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">STATUS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">START DATE</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {assignmentArray.length > 0 ? (
            assignmentArray.map((item) => (
              <tr key={item._id} className="border-b border-gray-200">
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {item.assetName}
                  <div className="text-gray-500">{item.assetType}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.base}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.assignedTo?.name || "Unknown"}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.quantity}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.purpose}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="rounded-full text-xs font-medium bg-green-100 text-green-800 px-2 py-1">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.startDate ? new Date(item.startDate).toLocaleDateString() : ""}
                </td>
                <td className="px-6 py-4 text-sm text-blue-500">View</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4 text-gray-500">
                No assignments found
              </td>
            </tr>
          )}

          {/* Pagination */}
          <tr>
            <td colSpan="8" className="px-6 py-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
                </p>

                <div className="flex items-center space-x-2">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2 py-1 text-sm border rounded"
                  >
                    {[10, 20, 50].map((size) => (
                      <option key={size} value={size}>
                        {size} per page
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    &lt;
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 border rounded ${
                        currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentTable;
