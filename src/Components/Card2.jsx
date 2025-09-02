import React from 'react'

function Card2() {
    return (
        <>
            <div className="grid grid-cols-4 gap-5 pr-14 mt-5">
                <div className="h-[80px] bg-white shadow flex items-center justify-center">
                    <h1>Total Assets</h1>
                </div>
                <div className="h-[80px] bg-white shadow flex items-center justify-center">
                    <h1>Avaliable</h1>
                </div>
                <div className="h-[80px] bg-white shadow flex items-center justify-center">
                    <h1>Assigned</h1>
                </div>
                <div className="h-[80px] bg-white shadow flex items-center justify-center">
                    <h1>Expended</h1>
                </div>
            </div>

        </>
    )
}

export default Card2