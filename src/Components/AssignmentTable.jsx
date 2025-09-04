import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";


function AssignmentTable() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/assignments?sortBy=startDate&sortOrder=desc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;

       const assignmentArray = Array.isArray(data) ? data : data.assignments || data.data || [];

    return (
        <div className="mt-5">
            <table className="h-[202px] w-full bg-white shadow">
                <thead>
                    <tr>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">ASSET</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">BASE</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">ASSIGNED TO</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">QUANTITY</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">PURPOSE</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">STATUS</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">START DATE</h1></th>
                        <th><h1 className="text-xl font-semibold bg-gray-100 p-3">ACTIONS</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {assignmentArray.map((item) => (
                        <tr key={item._id} className="border-b">
                            <td className="p-3">{item.assetName}</td>
                            <td className="p-3">{item.base}</td>
                            <td className="p-3">
                                {item.assignedTo?.name || item.assignedTo?.fullName || "Unknown"}
                            </td>
                            <td className="p-3">{item.quantity}</td>
                            <td className="p-3">{item.purpose}</td>
                            <td className="p-3">{item.status}</td>
                            <td className="p-3">
                                {item.startDate
                                    ? new Date(item.startDate).toLocaleDateString()
                                    : ""}
                            </td>
                            <td className="p-3">
                                <button className="text-blue-500 mr-2">View</button>
                                <button className="text-red-500">Return</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AssignmentTable;
