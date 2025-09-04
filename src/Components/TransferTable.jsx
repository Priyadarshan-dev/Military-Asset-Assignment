import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function TransferTable() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/transfers?sortBy=createdAt&sortOrder=desc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;

    const transfersArray = Array.isArray(data) ? data : data.transfers || data.data || [];

    return (
        <>

            <table className='h-[477px] w-full bg-white shadow'>
                <thead className="bg-gray-50">
                    <tr>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date↓</h1></th>
                        <th><h1 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</h1></th>
                    </tr>
                </thead>
                <tbody>
                    {transfersArray.map((item) => (
                        <tr key={item._id} className="border-b border-gray-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">{item.assetName || item.name || item.asset}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.fromBase || item.from || item.sourceBase}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.toBase || item.to || item.destinationBase}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity || item.amount}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status || item.transferStatus}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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

        </>
    )
}

export default TransferTable