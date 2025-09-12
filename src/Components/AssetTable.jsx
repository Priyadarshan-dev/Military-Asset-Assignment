import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function AssetTable({ filters }) {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const skip = (currentPage - 1) * itemsPerPage;
    let url = `https://servermms.onrender.com/api/assets?sortBy=name&sortOrder=asc&limit=${itemsPerPage}&skip=${skip}`;
    if (filters) url += `&${filters}`;

    fetchWithAuth(url)
      .then((json) => {
        setData(json);
        setTotalItems(json.total || json.count || 50);
      })
      .catch((err) => console.error(err));
  }, [currentPage, itemsPerPage, filters]);

  if (!data) return <p>Loading...</p>;

  const assetsArray = Array.isArray(data) ? data : data.assets || data.data || [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="h-[595px] w-full bg-white shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assetsArray.map((item) => (
            <tr key={item._id} className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">{item.name || item.assetName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type || item.assetType}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.base || item.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.available || item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assigned || 0}</td>
              <td className="px-6 py-4">
                {item.available > item.assigned ? (
                  <span className="rounded-full text-xs font-medium bg-green-100 text-green-800 px-2 py-1">
                    Sufficient
                  </span>
                ) : (
                  <span className="rounded-full text-xs font-medium bg-red-100 text-red-800 px-2 py-1">
                    Insufficient
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-blue-500 mr-2">View</button>
                <button className="text-blue-500 mr-2">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}

          {/* Pagination Row */}
          <tr>
            <td colSpan="7" className="px-6 py-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
                </p>

                <div className="flex items-center space-x-2">
                  {/* Per page */}
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-2 py-1 text-sm"
                  >
                    {[10, 20, 50].map((size) => (
                      <option key={size} value={size}>
                        {size} per page
                      </option>
                    ))}
                  </select>

                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    &lt;
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  {/* Next */}
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

export default AssetTable;
