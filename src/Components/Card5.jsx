import { useEffect, useState } from "react";

function Card5() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://servermms.onrender.com/api/dashboard", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODFmYTQxMzNmZTg0MmMxNjFiOTdmOGUiLCJpYXQiOjE3NTY4OTMyMTksImV4cCI6MTc1Njk3OTYxOX0.xGYA7R39wq69ip3R1UwRIJkkB_fZXAx8kjwwkD6fqus`,
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

    if (!data) return <p>Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 pr-14 pb-15">
      <div className="h-[237px] bg-white shadow p-4 overflow-y-auto">
        <h1 className="font-semibold mb-2">Recent Assignments</h1>
        {data.recentAssignments?.map((item) => (
          <div key={item._id} className="border-b py-2">
            <p>{item.assetName} - {item.quantity}</p>
            <p className="text-sm text-gray-500">
              {item.base} | {item.status}
            </p>
          </div>
        ))}
      </div>

      <div className="h-[237px] bg-white shadow p-4 overflow-y-auto">
        <h1 className="font-semibold mb-2">Recent Expenditures</h1>
        {data.recentExpenditures?.map((item) => (
          <div key={item._id} className="border-b py-2">
            <p>{item.assetName} - {item.quantity}</p>
            <p className="text-sm text-gray-500">
              {item.base} | {item.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card5;
