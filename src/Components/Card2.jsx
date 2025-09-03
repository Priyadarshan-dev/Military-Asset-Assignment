import { useEffect, useState } from "react";

function Card2() {
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

  if (!data || !data.summary) {
    return <p className="p-5">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-5 pr-14 mt-5">
      <div className="h-[80px] bg-white shadow flex items-center justify-center">
        <h1>Total Assets: {data.summary.totalAssets}</h1>
      </div>
      <div className="h-[80px] bg-white shadow flex items-center justify-center">
        <h1>Available: {data.summary.totalAvailable}</h1>
      </div>
      <div className="h-[80px] bg-white shadow flex items-center justify-center">
        <h1>Assigned: {data.summary.totalAssigned}</h1>
      </div>
      <div className="h-[80px] bg-white shadow flex items-center justify-center">
        <h1>Expended: {data.summary.totalExpended}</h1>
      </div>
    </div>
  );
}

export default Card2;
