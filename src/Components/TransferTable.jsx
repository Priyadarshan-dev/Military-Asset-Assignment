import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function TransferTable() {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const skip = (currentPage - 1) * itemsPerPage;
        fetchWithAuth(
            `https://servermms.onrender.com/api/transfers?sortBy=createdAt&sortOrder=desc&limit=${itemsPerPage}&skip=${skip}`
        )
            .then((json) => {
                setData(json);
                setTotalItems(json.total || json.count || 50); // fallback if API doesn’t return total
            })
            .catch((err) => console.error(err));
    }, [currentPage, itemsPerPage]);

    if (!data) return <p>Loading...</p>;

    const transfersArray = Array.isArray(data) ? data : data.transfers || data.data || [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="mt-5">
            <table className="w-full bg-white shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date↓</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="p-8">
                    {transfersArray.map((item) => (
                        <tr key={item._id} className="border-b border-gray-200">
                            <td className="px-6 whitespace-nowrap text-sm font-semibold text-primary-600">
                                {item.assetName || item.name || item.asset}
                                <div className="whitespace-nowrap text-sm text-gray-500">{item.assetType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.fromBase || item.from || item.sourceBase}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.toBase || item.to || item.destinationBase}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity || item.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status || item.transferStatus}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ""}
                            </td>
                            <td className="p-8">
                                <button className="text-blue-500 mr-2">View</button>
                            </td>
                        </tr>
                    ))}

                    {/* Pagination Row */}
                    <tr>
                        <td colSpan="7" className="px-6 py-4">
                            <div className="flex justify-between items-center">
                                {/* Showing info */}
                                <p className="text-sm text-gray-600">
                                    Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                                    {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
                                </p>

                                {/* Controls */}
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
                                            className={`px-3 py-1 border rounded ${
                                                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
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

export default TransferTable;
