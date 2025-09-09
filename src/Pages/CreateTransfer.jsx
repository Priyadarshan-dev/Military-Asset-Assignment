import React from "react";

function CreateTransfer() {
    return (
        <div className='lg:pt-[50px] lg:pl-[50px] lg:pr-[50px] px-4'>
            <h1 className="text-2xl font-semibold">Create New Asset</h1>
            <div className="h-[250px] w-full shadow bg-white mt-10">
                <div className="pt-5 pl-9 flex pr-9 gap-10">
                    <div className="flex flex-col">
                        <h1>
                            Asset Name
                        </h1>
                        <input type="text" className='mt-2 rounded shadow w-[520px]' />
                    </div>
                    <div className="flex flex-col">
                        <h1>
                            Asset Name
                        </h1>
                        <select className="bg-white shadow w-[520px] rounded mt-2" id="">
                            <option value="" hidden>Select Type</option>
                            <option>Vehicle</option>
                            <option>Weapon</option>
                            <option>Ammunition</option>
                            <option>Equipment</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="pt-5 pl-9 flex pr-9 gap-10">
                    <div className="flex flex-col">
                        <h1 className='mb-1 text-sm sm:text-base'>Base</h1>
                        <div className='w-[520px]  shadow rounded flex bg-white'>
                            <select
                                className='w-full bg-transparent border-none rounded-[6px] outline-none text-sm sm:text-base'
                            >
                                <option value="" hidden>Select Bases</option>
                                <option>Select Bases</option>
                                <option>Base Alpha</option>
                                <option>Base Bravo</option>
                                <option>Base Charlie</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1>
                            Openings
                        </h1>
                        <input type="text" className=' rounded shadow w-[520px]'/>
                    </div>
                </div>
                <div className="flex justify-end mt-10 gap-5 pr-9">

                    <button  className="bg-white shadow h-[40px] w-[100px] border rounded">
                       Cancel
                    </button>
                    <button className="bg-blue-500 h-[40px] w-[150px] rounded text-white">
                       Create Asset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateTransfer;
