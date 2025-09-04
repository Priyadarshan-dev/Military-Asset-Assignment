import React from 'react'
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function ExpenditureTable() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/expenditures?sortBy=expenditureDate&sortOrder=desc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;

    const expenditureArray = Array.isArray(data) ? data : data.expenditures || data.data || [];

    return (
        <>
            <div className='mt-5'>
                <table className='h-[166px] w-full bg-white shadow'>
                    <thead>
                        <tr>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ASSET</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>BASE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>QUANTITY</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>REASON</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>EXPENDED BY</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>DATE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ACTIONS</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenditureArray.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-3">{item.assetName}</td>
                                <td className="p-3">{item.base}</td>
                                <td className="p-3">{item.quantity}</td>
                                <td className="p-3">{item.reason || item.purpose}</td>
                                <td className="p-3">
                                    {item.expendedBy?.name || item.expendedBy?.fullName || "Unknown"}
                                </td>
                                <td className="p-3">
                                    {item.expenditureDate ? new Date(item.expenditureDate).toLocaleDateString() : ''}
                                </td>
                                <td className="p-3">
                                    <button className="text-blue-500 mr-2">View</button>
                                    <button className="text-red-500">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ExpenditureTable