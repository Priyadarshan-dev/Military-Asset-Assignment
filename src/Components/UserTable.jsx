import React from 'react'
import { useEffect, useState } from "react"; "https://servermms.onrender.com/api/users?sortBy=fullName&sortOrder=asc&limit=10&skip=0"
import { fetchWithAuth } from "../Services/dashboard";
function UserTable() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchWithAuth("https://servermms.onrender.com/api/users?sortBy=fullName&sortOrder=asc&limit=10&skip=0")
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [])

    if (!data) return <p>Loading...</p>;

    
    const userArray = Array.isArray(data) ? data : data.users || data.data || [];

    return (
        <>
            <div className='mt-5'>
                <table className='h-[524px] w-full bg-white shadow'>
                    <thead>
                        <tr>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>NAME</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>USERNAME</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>EMAIL</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ROLE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>BASE</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>STATUS</h1></th>
                            <th><h1 className='text-xl font-semibold bg-gray-100 p-3'>ACTIONS</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        {userArray.map((item) => (
                            <tr key={item._id} className="border-b">
                                <td className="p-3">{item.fullName}</td>
                                <td className="p-3">{item.username}</td>
                                <td className="p-3">{item.email}</td>
                                <td className="p-3">{item.role}</td>
                                <td className="p-3">{item.assignedBase || "N/A"}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded text-xs ${item.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                        {item.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
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

export default UserTable