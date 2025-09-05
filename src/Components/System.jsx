// src/App.jsx
import { useState } from "react";

function System() {
    const [maintenance, setMaintenance] = useState(false);

    return (
        <div >
            <div className="bg-white shadow rounded-lg p-6 w-full max-w-6xl mx-auto">
                {/* System Settings */}
                <h2 className="text-xl font-semibold mb-4">System Settings</h2>

                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-6">
                    <div>
                        <h3 className="font-medium">Maintenance Mode</h3>
                        <p className="text-sm text-gray-500">
                            When enabled, only administrators can access the system
                        </p>
                    </div>
                    <button
                        onClick={() => setMaintenance(!maintenance)}
                        className={`px-4 py-2 rounded text-white ${maintenance ? "bg-red-500" : "bg-green-500"
                            }`}
                    >
                        {maintenance ? "Disable" : "Enable"}
                    </button>
                </div>

                {/* System Information */}
                <h2 className="text-xl font-semibold mb-4">System Information</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600">Version</p>
                        <p className="font-medium">1.0.0</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Last Updated</p>
                        <p className="font-medium">5/9/2025</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Database Status</p>
                        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                            Connected
                        </span>
                    </div>
                    <div>
                        <p className="text-gray-600">API Status</p>
                        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                            Operational
                        </span>
                    </div>
                </div>
                <div className="flex justify-end">  
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Save Settings
                </button>
                </div>

            </div>
        </div>
    );
}

export default System;
