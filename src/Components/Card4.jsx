import { useEffect, useState } from "react";
import { fetchWithAuth } from "../Services/dashboard"; // ✅ import reusable fetch

function Card4() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWithAuth("https://servermms.onrender.com/api/dashboard")
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 pr-14">
      {/* Recent Transfers Table */}
      <div className="h-[383px] bg-white rounded-lg shadow overflow-y-auto">
        <div className="px-4 py-5 flex justify-between items-center">
          <h1 className="text-lg leading-6 font-medium text-gray-900">
            Recent Transfers
          </h1>
          <h1 className="text-sm font-medium text-primary-600">View all</h1>
        </div>

        <div className="overflow-x-auto">
          <table>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  From
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.recentTransfers.map((item) => (
                <tr key={item._id} className="border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.assetName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.fromBase}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.toBase}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Recent Purchases Table */}
      <div className="h-[383px] rounded-lg bg-white shadow p-4 overflow-y-auto">
        <div className="px-4 py-5 flex justify-between items-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Recent Purchases
          </h2>
          <h1 className="text-sm font-medium text-primary-600">View all</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Base
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {data.recentPurchases?.map((purchase) => (
                <tr key={purchase._id} className="border-b border-gray-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {purchase.assetName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {purchase.base}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {purchase.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {purchase.status}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(purchase.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Card4;
