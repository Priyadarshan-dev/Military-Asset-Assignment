function GeneralCard() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">General Settings</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* System Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">System Name</label>
          <input
            type="text"
            defaultValue="Military Asset Management System"
            className="w-full border border-gray-200 mt-2 rounded-lg shadow"
          />
        </div>

        {/* Organization Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Organization Name</label>
          <input
            type="text"
            defaultValue="Department of Defense"
            className="w-full border border-gray-200  mt-2 rounded-lg shadow"
          />
        </div>

        {/* Default Currency */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Default Currency</label>
          <select className="w-full border border-gray-200  mt-2 rounded-lg shadow">
            <option>USD ($)</option>
            <option>EUR (€)</option>
            <option>INR (₹)</option>
          </select>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme</label>
          <select className="w-full border border-gray-200  mt-2 rounded-lg shadow">
            <option>Default</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>

        {/* Date Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date Format</label>
          <select className="w-full border border-gray-200  mt-2 rounded-lg shadow">
            <option>MM/DD/YYYY</option>
            <option>DD/MM/YYYY</option>
          </select>
        </div>

        {/* Time Format */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Time Format</label>
          <select className="w-full border border-gray-200  mt-2 rounded-lg shadow">
            <option>12-hour (AM/PM)</option>
            <option>24-hour</option>
          </select>
        </div>

        {/* Timezone */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Timezone</label>
          <select className="w-[530px] border border-gray-200 mt-2 rounded-lg shadow">
            <option>Eastern Time (ET)</option>
            <option>Central Time (CT)</option>
            <option>Pacific Time (PT)</option>
          </select>
        </div>

        {/* Email Notifications */}
        <div className="flex items-center space-x-2 md:col-span-2">
          <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 border-gray-200 rounded" />
          <label className="text-sm text-gray-700">Enable email notifications</label>
        </div>

        {/* Save Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralCard;
