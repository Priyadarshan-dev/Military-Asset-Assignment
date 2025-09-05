import { useState } from "react";
import GeneralCard from "../Components/GeneralCard"
import System from "../Components/System";
import AssetTypesCard from "../Components/AssetTypesCard";
import Bases from "../Components/Bases";

function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Asset Types", "Bases", "System"];

  return (
    <div className="pt-[50px] pl-[72px] justify-start pr-[50px]">
        <h1 className='text-2xl font-semibold text-gray-900'>Settings</h1>

      <div className="border-b border-gray-200 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "General" && <GeneralCard />}
        {activeTab === "Asset Types" && <AssetTypesCard />}
        {activeTab === "Bases" && <Bases />}
        {activeTab === "System" && <System/>}
      </div>
    </div>
  );
}

export default SettingsTabs;
