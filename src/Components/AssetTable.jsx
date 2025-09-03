
import { useEffect, useState } from "react";

function AssetTable() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://servermms.onrender.com/api/assets?sortBy=name&sortOrder=asc&limit=10&skip=0", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODFmYTQxMzNmZTg0MmMxNjFiOTdmOGUiLCJpYXQiOjE3NTY5MDM2NzYsImV4cCI6MTc1Njk5MDA3Nn0.A6mltO_BBwP96Qgi5iE5DPF2WqjUzte65JBYBxpCpdw`,
            },
        })
            .then((res) => res.json())
            .then((json) => {
                console.log("API Response:", json); // Check the actual structure
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (!data) return <p>No data found</p>;

    // Check what the actual response structure is
    const assetsArray = Array.isArray(data) ? data : data.assets || data.data || [];

    return (
        <>
            <div className='mt-5'>
                <table className='h-[595px] w-[1100px] bg-white shadow'>
                    <thead>
                        <tr>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Name</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Type</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Base</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Available</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Assigned</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Status</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>Actions</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetsArray.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-3">{item.name || item.assetName}</td>
                                <td className="p-3">{item.type || item.assetType}</td>
                                <td className="p-3">{item.base || item.location}</td>
                                <td className="p-3">{item.available || item.quantity}</td>
                                <td className="p-3">{item.assigned || item.assigned}</td>
                                <td className="p-3">{item.status}</td>
                                <td className="p-3">
                                    <button className="text-blue-500 mr-2">Edit</button>
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

export default AssetTable;