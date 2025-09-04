import React from 'react'
import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";


function PurchasesTable() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/purchases?sortBy=purchaseDate&sortOrder=desc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;

        const purchaseArray = Array.isArray(data) ? data : data.purchases || data.data || [];

    return (
        <>
            <div className='mt-5'>
                <table className='h-[246px] w-full bg-white shadow'>
                    <thead>
                        <tr>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ASSET</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>BASE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>SUPPLIER</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>QUANTITY</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>TOTAL COST</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>STATUS</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>DATE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ACTIONS</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseArray.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-3">{item.assetName || item.name}</td>
                                <td className="p-3">{item.base || item.baseLocation}</td>
                                <td className="p-3">{item.supplier || item.vendor}</td>
                                <td className="p-3">{item.quantity || item.amount}</td>
                                <td className="p-3">${item.totalCost || item.cost || 0}</td>
                                <td className="p-3">{item.status || item.purchaseStatus}</td>
                                <td className="p-3">
                                    {item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : ''}
                                </td>
                                <td className="p-3">
                                    <button className="text-blue-500 mr-2">View</button>
                                    <button className="text-red-500">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PurchasesTable