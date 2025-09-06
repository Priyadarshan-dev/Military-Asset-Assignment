import { useState } from "react";

function Bases() {
  const [bases, setBases] = useState([
    "Base Alpha",
    "Base Bravo",
    "Base Charlie",
  ]);
  const [newBase, setNewBase] = useState("");

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Bases</h2>

      {/* Input + Add Button */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={newBase}
          onChange={(e) => setNewBase(e.target.value)}
          placeholder="Add new base"
          className="flex-1 border rounded border-gray-200 px-3 py-2"
        />
        <button
          onClick={() => {
            if (newBase.trim()) {
              setBases([...bases, newBase]);
              setNewBase("");
            }
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Base List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {bases.map((base, i) => (
          <div
            key={i}
            className="flex justify-between items-center border rounded border-gray-200 p-3"
          >
            <span>{base}</span>
            <button
              onClick={() => setBases(bases.filter((b) => b !== base))}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bases;
