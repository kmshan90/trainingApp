import React, { useState, useEffect } from "react";
const IntermediateReact = () => {
    const [intermediate, setIntermediate] = useState([]);
    const fetchIntermediateData = async () => {
        try{
          const data = await fetch("./trainingApp/data.json");
          const dataJson = await data.json();
          const filteredData = await dataJson.filter((item)=>{return item.level === "intermediate"});
          setIntermediate(filteredData);
        }
        catch(e){
            console.log(e)
        }
    }
    const handleCompleted = (e, id) =>{
        const newData = [...intermediate]; 
        newData[0].topic = newData[0].topic.map((item) => {
            if(item.id === id){
                return {...item, completed: e.target.checked}
            }
            return item;
        });
        setIntermediate([...newData]);
        console.log(intermediate)
    }
    const handleRemove = (id) =>{
        const newData = [...intermediate]; 
        newData[0].topic = newData[0].topic.filter((item) => {
            return item.id !== id
        });
        setIntermediate([...newData]);
        console.log(intermediate)
    }
    useEffect(() => {
        fetchIntermediateData();
    },[])
    return (
        <div className="w-full float-left">
            {intermediate?.length > 0 && 
            <div className="w-full float-left border">
                {intermediate[0].topic.map((item)=>(
                    <div key={item.id} className="w-full float-left p-4 border-b last-of-type:border-b-0 flex items-center space-x-4 justify-between">
                        <label className="flex items-center cursor-pointer">
                            <input onChange={(e)=>handleCompleted(e,item.id)} checked={item.completed} className="mr-2 peer" type="checkbox" /><span className="peer-checked:line-through peer-checked:opacity-60">{item.chapter}</span>
                        </label>
                        <svg onClick={()=>handleRemove(item.id)} className="flex-shrink-0 cursor-pointer" width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.74999 10.7083L6.02082 8.41667L8.31249 10.7083L8.85416 10.1667L6.58332 7.875L8.85416 5.5625L8.31249 5.02083L6.02082 7.3125L3.74999 5.02083L3.18749 5.5625L5.47916 7.875L3.18749 10.1667L3.74999 10.7083ZM2.33332 14.25C1.95832 14.25 1.63193 14.1111 1.35416 13.8333C1.07638 13.5556 0.93749 13.2292 0.93749 12.8542V2.27083H0.104156V1.54167H3.39582V0.9375H8.62499V1.54167H11.9167V2.27083H11.0833V12.8542C11.0833 13.2292 10.9479 13.5556 10.6771 13.8333C10.4062 14.1111 10.0764 14.25 9.68749 14.25H2.33332ZM10.3542 2.27083H1.66666V12.8542C1.66666 13.0208 1.7361 13.1736 1.87499 13.3125C2.01388 13.4514 2.16666 13.5208 2.33332 13.5208H9.68749C9.85416 13.5208 10.0069 13.4514 10.1458 13.3125C10.2847 13.1736 10.3542 13.0208 10.3542 12.8542V2.27083ZM1.66666 2.27083V13.5208V12.8542V2.27083Z" fill="#EB0000"/>
                        </svg>
                    </div>
                ))}
            </div>
            }
        </div>
    );
};
export default IntermediateReact;