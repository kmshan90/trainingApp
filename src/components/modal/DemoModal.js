import React, { useState } from "react";
import Counter from "../../pages/counter/Counter";
const DemoModal = ({hasModal,handleModalClose}) => {
    return (
        <>
            <div className="w-screen h-screen fixed top-0 left-0 bg-black/20"></div>
            <div className="max-w-[420px] w-full px-2 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className="w-full float-left relative p-6 bg-white text-center">
                    <p>Alert</p>
                    <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 mt-8" type="button" onClick={()=>handleModalClose()}>Close</button>
                </div>
            </div>
        </>
    );
};
export default DemoModal;