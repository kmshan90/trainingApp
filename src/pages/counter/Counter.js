import React, { useState } from "react";
import DemoModal from "../../components/modal/DemoModal";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [hasModal, setHasModal] = useState(false);

    return (
        <div className="w-full flex flex-col justify-center items-center min-h-[400px]">
            <div className="flex space-x-4 items-center">
                <button onClick={()=>setCount(count-1)} className="px-4 py-2 border rounded hover:bg-gray-100" type="button">-</button>
                <span className="text-2xl">{count}</span>
                <button onClick={()=>setCount(count+1)}  className="px-4 py-2 border rounded hover:bg-gray-100" type="button">+</button>
            </div>
            <div className="w-full float-left clear-both flex justify-center mt-10">
                <button onClick={()=>setHasModal(true)} type="button" className="bg-blue-400 text-white p-3 cursor-pointer hover:bg-blue-500">Open Modal</button>
            </div>
            {hasModal && <DemoModal handleModalClose={()=>setHasModal(false)} />}
        </div>
    );
};
export default Counter;