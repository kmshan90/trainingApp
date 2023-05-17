import React, { useState } from "react";
import AdvancedReact from "../../components/category/AdvancedReact";
import BasicReact from "../../components/category/BasicReact";
import IntermediateReact from "../../components/category/IntermediateReact";
const Home = () => {
    const [activeTab, setActiveTab] = useState('basic');
    // const [users, setUsers] = useState([]);

  // const fetchUserData = async () => {
  //   try{
  //       const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const dataJson = await data.json();
  //       // return dataJson;
  //       console.log(dataJson);
  //       setUsers(dataJson);
  //   }
  //   catch(e){
  //       console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   fetchUserData();
  // },[]);
  
    return (
        <div className="w-full float-left">
            <h1 className="text-center text-2xl">React JS ToDo</h1>
            <div className="w-full float-left mt-4 flex justify-center [&>span]:border [&>span]:p-4 [&>span]:cursor-pointer">
                <span className={`${activeTab === 'basic' ? 'bg-blue-500 text-white':'hover:bg-gray-100'}`} onClick={()=>setActiveTab('basic')}>Basic</span>
                <span className={`${activeTab === 'intermediate' ? 'bg-blue-500 text-white':'hover:bg-gray-100'}`} onClick={()=>setActiveTab('intermediate')}>Intermediate</span>
                <span className={`${activeTab === 'advanced' ? 'bg-blue-500 text-white':'hover:bg-gray-100'}`} onClick={()=>setActiveTab('advanced')}>Advanced</span>
            </div>
            <div className="w-full float-left py-8">
                {activeTab === 'basic' && <BasicReact/>}
                {activeTab === 'intermediate' && <IntermediateReact/>}
                {activeTab === 'advanced' && <AdvancedReact/>}
            </div>
        </div>
    );
};
export default Home;