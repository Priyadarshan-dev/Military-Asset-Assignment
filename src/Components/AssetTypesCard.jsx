import { useState } from "react";

function AssetTypesCard() {
    const [types, setTypes] = useState([
        "Weapon",
        "Vehicle",
        "Equipment",
        "Ammunition",
        "Medical",
        "Food",
    ]);
    const [newType, setNewType] = useState("");

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Asset Types</h2>

            {/* Input + Add Button */}
            <div className="flex gap-2 mb-6">
                <input
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    placeholder="Add new asset type"
                    className="flex-1 border rounded border-gray-200"
                />
                <button
                    onClick={() => {
                        if (newType.trim()) {
                            setTypes([...types, newType]);
                            setNewType("");
                        }
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded"
                >
                    Add
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {types.map((t, i) => (
                    <div key={i} className="flex justify-between border rounded p-5 border-gray-200">
                        <span>{t}</span>
                        <button
                            onClick={() => setTypes(types.filter((x) => x !== t))}
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

export default AssetTypesCard;
