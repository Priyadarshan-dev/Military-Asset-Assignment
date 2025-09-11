import React, { useState } from 'react';
import PurchasesTable from '../Components/PurchasesTable';
import { Link } from "react-router-dom";

function Purchases() {
  const [showFilters, setShowFilters] = useState(false);

  // 🔹 Filter states
  const [fromBase, setFromBase] = useState('');
  const [toBase, setToBase] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const resetFilters = () => {
    setFromBase('');
    setToBase('');
    setStatus('');
    setStartDate('');
    setEndDate('');
    setSearchQuery('');
  };

  return (
    <div className='pt-[50px] pl-[72px] justify-start pr-[50px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-900'>Purchases</h1>
        <div className='flex space-x-3'>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className='h-[37px] w-[102px] bg-white shadow flex justify-center items-center rounded-lg gap-2'
          >
            <img src="/assets/images/filter.png" alt="cube icon" className="h-4 w-4" />
            Filters
          </button>

          <Link
            to="/assets/new"
            className="h-[37px] w-[130px] btn-primary shadow flex justify-center items-center rounded-lg gap-2"
          >
            <img src="/assets/images/plus.png" alt="cube icon" className="h-4 w-4 invert brightness-0" />
            Add Asset
          </Link>
        </div>
      </div>

      {showFilters && (
        <div className="mt-4 bg-white rounded-lg shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">Filters</h1>
            <h1 className="cursor-pointer" onClick={() => setShowFilters(false)}>X</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">From Base</label>
              <select value={fromBase} onChange={(e) => setFromBase(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                <option value="">All Bases</option>
                <option>Base Alpha</option>
                <option>Base Bravo</option>
                <option>Base Charlie</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">To Base</label>
              <select value={toBase} onChange={(e) => setToBase(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                <option value="">All Bases</option>
                <option>Base Alpha</option>
                <option>Base Bravo</option>
                <option>Base Charlie</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm">
                <option value="">All Statuses</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>In Progress</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Start Date</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">End Date</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm" />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Search</label>
              <input type="text" placeholder="Search by asset name, type, or base" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="border border-gray-300 rounded-lg h-10 px-2 text-sm" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <button onClick={resetFilters} className="h-10 px-5 rounded border border-gray-300 bg-white shadow">Reset</button>
            <button className="h-10 px-5 rounded bg-blue-500 text-white shadow">Apply</button>
          </div>
        </div>
      )}

      {/* 🔹 Pass filter props to PurchasesTable */}
      <PurchasesTable
        filters={{ fromBase, toBase, status, startDate, endDate, searchQuery }}
      />
    </div>
  );
}

export default Purchases;
