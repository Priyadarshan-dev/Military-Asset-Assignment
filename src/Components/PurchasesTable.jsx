import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function PurchasesTable({ filters }) {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const skip = (currentPage - 1) * itemsPerPage;
        const params = new URLSearchParams({
            sortBy: "purchaseDate",
            sortOrder: "desc",
            limit: itemsPerPage,
            skip
        });

        // 🔹 Add filters to query
        if (filters.fromBase) params.append("fromBase", filters.fromBase);
        if (filters.toBase) params.append("toBase", filters.toBase);
        if (filters.status) params.append("status", filters.status);
        if (filters.startDate) params.append("startDate", filters.startDate);
        if (filters.endDate) params.append("endDate", filters.endDate);
        if (filters.searchQuery) params.append("search", filters.searchQuery);

        fetchWithAuth(`https://servermms.onrender.com/api/purchases?${params.toString()}`)
            .then(json => {
                setData(json);
                setTotalItems(json.total || json.count || 50);
            })
            .catch(err => console.error(err));
    }, [currentPage, itemsPerPage, filters]);

    if (!data) return <p>Loading...</p>;

    const purchaseArray = Array.isArray(data) ? data : data.purchases || data.data || [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="mt-5">
            <table className="w-full bg-white shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ASSET</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BASE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SUPPLIER</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QUANTITY</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL COST</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DATE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {purchaseArray.map((item) => (
                        <tr key={item._id} className="border-b border-gray-200">
                            <td className="px-6 whitespace-nowrap text-sm font-semibold text-primary-600">
                                {item.assetName || item.name}
                                <div className="whitespace-nowrap text-sm text-gray-500">{item.assetType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.base || item.baseLocation}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.supplier || item.vendor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity || item.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.totalCost || item.cost || 0}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className="rounded-full text-xs font-medium bg-green-100 text-green-800 px-2 py-1">
                                    {item.status || item.purchaseStatus}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ""}
                            </td>
                            <td className="p-8">
                                <button className="text-blue-500 mr-2">View</button>
                            </td>
                        </tr>
                    ))}

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
                                        onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                                        className="px-2 py-1 text-sm"
                                    >
                                        {[10, 20, 50].map((size) => <option key={size} value={size}>{size} per page</option>)}
                                    </select>

                                    <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-3 py-1 border rounded disabled:opacity-50">&lt;</button>

                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}>
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-3 py-1 border rounded disabled:opacity-50">&gt;</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PurchasesTable;
