import React, { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Profile</h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 flex space-x-6">
        <button
          onClick={() => setActiveTab("info")}
          className={`pb-2 text-sm font-medium ${activeTab === "info"
            ? "text-blue-600 border-b-2 border-blue-600 text-2xl"
            : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Profile Information
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`pb-2 text-sm font-medium ${activeTab === "password"
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-500 hover:text-gray-700"
            }`}
        >
          Change Password
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "info" && (
          <div className="bg-white shadow rounded h-[500px] w-full">
            <div className="">
              <div className="flex flex-col h-[100px] px-10 py-5 border-b border-gray-200">
                <h1 className="text-2xl font-semibold">User Information</h1>
                <h2 className="text-xl ">Personal details and application access</h2>
              </div>
              <div className="px-10 py-7 h-[80px] flex bg-gray-100 gap-[350px]">
                <h1>Full Name</h1>
                <h1>System Administrator</h1>
              </div>
              <div className="px-10 py-7 h-[80px] flex bg-white gap-[350px]">
                <h1>Username</h1>
                <h1>gangadharan</h1>
              </div>
              <div className="px-10 py-7 h-[80px] flex bg-gray-100 gap-[320px]">
                <h1>Email address</h1>
                <h1>gangadharana01@gmail.com</h1>
              </div>
              <div className="px-10 py-7 h-[80px] flex bg-white gap-[385px]">
                <h1>Role</h1>
                <h1>Admin</h1>
              </div>
              <div className="px-10 py-7 h-[80px] flex bg-white gap-[310px]">
                <h1>Account Status</h1>
                <h1>Active</h1>
              </div>
            </div>
          </div>
        )}
        {activeTab === "password" && (
          <div className="bg-white shadow h-[400px] rounded w-full">
            <div>
              <div className="px-7 py-7">
                <h1>Change Password</h1>
              </div>
              <div className="flex flex-col px-7 gap-3">
                <h1>Current Password</h1>
                <input
                  type="text"
                  className='bg-white shadow h-7 rounded-lg border border-gray-300 w-[800px]'
                />
              </div>
              <div className="flex flex-col px-7 py-6">
                <h1>New Password</h1>
                <input
                  type="text"
                  className='bg-white shadow h-7 rounded-lg border border-gray-300 w-[800px]'
                />
              </div>
              <div className="flex flex-col px-7 ">
                <h1>Confirm New Password</h1>
                <input
                  type="text"
                  className='bg-white shadow h-7 rounded-lg border border-gray-300 w-[800px]'
                />
              </div>
              <div className="flex justify-end px-10 mt-9">
                <button className="bg-blue-500 h-[40px] w-[170px] text-white rounded">Change Password</button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
