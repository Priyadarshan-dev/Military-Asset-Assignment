import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard";

function Card2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWithAuth("https://servermms.onrender.com/api/dashboard")
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data || !data.summary) {
    return <p className="p-5">Loading...</p>;
  }

  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pr-4 md:pr-8 lg:pr-14 mt-5">
     <div className="min-h-[88px] bg-white shadow flex gap-5 items-center rounded-lg pl-4 justify-start">
        <div className="h-[48px] w-[48px] flex items-center justify-center rounded-lg bg-primary-600">
          <img
            src="/assets/images/3d-cube.png"
            alt="cube icon"
            className="h-6 w-6 invert brightness-0"
          />
        </div>
        <div className="flex flex-col">
          <h1>Total Assets</h1>
          <h2>{data.summary.totalAssets}</h2>
        </div>
      </div>
      <div className="h-[88px] bg-white gap-5 shadow flex items-center rounded-lg pl-4 justify-start">
        <div className="h-[48px] w-[48px] rounded-lg flex items-center justify-center bg-green-600">
          <img
            src="/assets/images/trending.png"
            alt="cube icon"
            className="h-6 w-6 invert brightness-0"
          /></div>
        <div className="flex flex-col">
          <h1>Available</h1>
          <h2>{data.summary.totalAvailable}</h2>
        </div>
      </div>
      <div className="h-[88px] bg-white  gap-5 shadow flex items-center rounded-lg pl-4 justify-start">
        <div className="h-[48px] w-[48px] rounded-lg flex items-center justify-center bg-yellow-500">
          <img
            src="/assets/images/team.png"
            alt="cube icon"
            className="h-6 w-6 invert brightness-0"
          />
        </div>
        <div className="flex flex-col">
          <h1>Assigned</h1>
          <h2> {data.summary.totalAssigned}</h2>
        </div>
      </div>
      <div className="h-[88px] bg-white shadow gap-5 flex items-center rounded-lg pl-4 justify-start">
        <div className="h-[48px] w-[48px] rounded-lg flex items-center justify-center bg-red-600">
          <img
            src="/assets/images/trend.png"
            alt="cube icon"
            className="h-6 w-6 invert brightness-0"
          />
        </div>
        <div className="flex flex-col">
          <h1>Expended</h1>
          <h2>{data.summary.totalExpended}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card2;
