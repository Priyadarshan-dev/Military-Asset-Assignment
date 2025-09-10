import React, { useState } from 'react'; // 👈 Added useState
import ExpenditureTable from '../Components/ExpenditureTable';
import { Link } from "react-router-dom";

function Expenditures() {
  const [showFilters, setShowFilters] = useState(false); // 👈 State for toggle

  return (
    <>
      <div className='pt-[50px] pl-[72px] justify-start pr-[50px]'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold text-gray-900'>Expenditures</h1>
          <div className='flex space-x-3'>
            {/* 🔥 Toggle filter box */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg gap-2'
            >
              <img
                src="/assets/images/filter.png"
                alt="cube icon"
                className="h-4 w-4"
              />
              Filters
            </button>

            <Link
              to="/assets/new"
              className="h-[37px] w-[130px] btn-primary shadow flex justify-center items-center rounded-lg gap-2"
            >
              <img
                src="/assets/images/plus.png"
                alt="cube icon"
                className="h-4 w-4 invert brightness-0"
              />
              Add Asset
            </Link>
          </div>
        </div>
        {/* 🔥 Show filter box if showFilters is true */}
        {showFilters && (
          <div className="mt-4 bg-white rounded-lg shadow p-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-lg font-semibold">Filters</h1>
              <h1
                className="cursor-pointer"
                onClick={() => setShowFilters(false)}
              >
                X
              </h1>
            </div>

            {/* Grid Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* From Base */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">From Base</label>
                <select className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                  <option>All Bases</option>
                  <option>Base Alpha</option>
                  <option>Base Bravo</option>
                  <option>Base Charlie</option>
                </select>
              </div>

              {/* To Base */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">To Base</label>
                <select className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                  <option>All Bases</option>
                  <option>Base Alpha</option>
                  <option>Base Bravo</option>
                  <option>Base Charlie</option>
                </select>
              </div>

              {/* Status */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Status</label>
                <select className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                </select>
              </div>

              {/* Start Date */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg h-10 px-2 text-sm"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">End Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg h-10 px-2 text-sm"
                />
              </div>

              {/* Search */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Search</label>
                <input
                  type="text"
                  placeholder="Search by asset name, type, or base"
                  className="border border-gray-300 rounded-lg h-10 px-2 text-sm"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button className="h-10 px-5 rounded border border-gray-300 bg-white shadow">
                Reset
              </button>
              <button className="h-10 px-5 rounded bg-blue-500 text-white shadow">
                Apply
              </button>
            </div>
          </div>
        )}

        <ExpenditureTable />
      </div>
    </>
  );
}

export default Expenditures;
