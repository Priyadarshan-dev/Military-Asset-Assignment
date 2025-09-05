import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function UserTable() {
    const [data, setData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const skip = (currentPage - 1) * itemsPerPage;
        fetchWithAuth(
            `https://servermms.onrender.com/api/users?sortBy=fullName&sortOrder=asc&limit=${itemsPerPage}&skip=${skip}`
        )
            .then((json) => {
                setData(json);
                setTotalItems(json.total || json.count || 50);
            })
            .catch((err) => console.error(err));
    }, [currentPage, itemsPerPage]);

    if (!data) return <p>Loading...</p>;

    const userArray = Array.isArray(data) ? data : data.users || data.data || [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="mt-5">
            <table className="h-[524px] w-full bg-white shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NAME</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">USERNAME</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROLE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BASE</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {userArray.map((item) => (
                        <tr key={item._id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-medium font-semibold text-gray-900">{item.fullName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.username}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assignedBase || "N/A"}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span
                                    className={`px-2 py-1 rounded text-xs ${
                                        item.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {item.active ? "Active" : "Inactive"}
                                </span>
                            </td>
                            <td className="p-3">
                                <button className="text-blue-500 mr-2">Edit</button>
                                <button className="text-red-500">DeActivate</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                {/* ✅ Pagination */}
                <tfoot>
                    <tr>
                        <td colSpan="7" className="px-6 py-4">
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

                                    {/* Page numbers (only 2 visible at a time) */}
                                    {(() => {
                                        let start = Math.max(1, currentPage - 1);
                                        let end = Math.min(totalPages, start + 1);

                                        if (end - start < 1) {
                                            start = Math.max(1, end - 1);
                                        }

                                        return Array.from({ length: end - start + 1 }, (_, i) => {
                                            const page = start + i;
                                            return (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={`px-3 py-1 border rounded ${
                                                        currentPage === page ? "bg-blue-500 text-white" : ""
                                                    }`}
                                                >
                                                    {page}
                                                </button>
                                            );
                                        });
                                    })()}

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
                </tfoot>
            </table>
        </div>
    );
}

export default UserTable;
