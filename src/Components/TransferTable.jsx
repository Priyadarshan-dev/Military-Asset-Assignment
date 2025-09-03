import { useEffect, useState } from "react";

function TransferTable() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://servermms.onrender.com/api/transfers?sortBy=createdAt&sortOrder=desc&limit=10&skip=0", {
            headers: {
                Authorization: `
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODFmYTQxMzNmZTg0MmMxNjFiOTdmOGUiLCJpYXQiOjE3NTY5MDY1OTgsImV4cCI6MTc1Njk5Mjk5OH0.VWrSncajG5_hDJ_prWRftUoYV71QvrBMVRKBySqW6tA`,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                console.log("API Response:", json); 
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    const transfersArray = Array.isArray(data) ? data : data.transfers || data.data || [];

    return (
        <>
            <div>
                <table className='h-[477px] w-[943px] bg-white shadow'>
                    <thead>
                        <tr>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Asset</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>From</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>To</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Quantity</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Status</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Date↓</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Actions</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transfersArray.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-3">{item.assetName || item.name || item.asset}</td>
                                <td className="p-3">{item.fromBase || item.from || item.sourceBase}</td>
                                <td className="p-3">{item.toBase || item.to || item.destinationBase}</td>
                                <td className="p-3">{item.quantity || item.amount}</td>
                                <td className="p-3">{item.status || item.transferStatus}</td>
                                <td className="p-3">
                                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}
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

export default TransferTable