import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function AssetTable() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/assets?sortBy=name&sortOrder=asc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;
    
    const assetsArray = Array.isArray(data) ? data : data.assets || data.data || [];

    return (
        <>
            <div className="mt-5">
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
                            <tr key={item._id}  className="border-b border-gray-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">{item.name || item.assetName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.type || item.assetType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.base || item.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.available || item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.assigned || item.assigned}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                                <td className="ppx-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button className="text-blue-500 mr-2">Edit</button>
                                    <button className="text-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AssetTable;
