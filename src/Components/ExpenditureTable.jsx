import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function ExpenditureTable({ filters }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const skip = (currentPage - 1) * itemsPerPage;
      const params = new URLSearchParams({
        sortBy: "expenditureDate",
        sortOrder: "desc",
        limit: itemsPerPage,
        skip,
        ...(filters.fromBase && { base: filters.fromBase }),
        ...(filters.toBase && { toBase: filters.toBase }),
        ...(filters.status && { status: filters.status }),
        ...(filters.startDate && { startDate: filters.startDate }),
        ...(filters.endDate && { endDate: filters.endDate }),
        ...(filters.search && { search: filters.search }),
      });

      const json = await fetchWithAuth(
        `https://servermms.onrender.com/api/expenditures?${params.toString()}`
      );

      setData(json.expenditures || []);
      setTotalItems(json.total || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="mt-5">
      <table className="w-full bg-white shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ASSET</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BASE</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QUANTITY</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">REASON</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EXPENDED BY</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border-b border-gray-200">
              <td className="px-6 whitespace-nowrap text-sm font-semibold text-primary-600">{item.assetName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.base}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="rounded-full text-xs font-medium bg-green-100 text-green-800 px-2 py-1">{item.reason || item.purpose}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.expendedBy?.name || item.expendedBy?.fullName || "Unknown"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.expenditureDate ? new Date(item.expenditureDate).toLocaleDateString() : ""}
              </td>
              <td className="p-8">
                <button className="text-blue-500 mr-2">View</button>
              </td>
            </tr>
          ))}

          {/* Pagination */}
          <tr>
            <td colSpan="7" className="px-6 py-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
                </p>

                <div className="flex items-center space-x-2">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {[10, 20, 50].map((size) => (
                      <option key={size} value={size}>{size} per page</option>
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
                      className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
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

export default ExpenditureTable;
