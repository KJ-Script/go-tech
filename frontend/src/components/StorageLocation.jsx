import React from "react";
import Storage from "./Storage";

function StorageLocation({setTab}) {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex justify-center my-[5%]">
          <p className="text-xl font-semibold">Storage Temprature</p>
        </div>
        <div className="w-full flex justify-center my-[5%] space-x-12">
            <Storage />
            <Storage />
        </div>
        
        <div className="w-full flex justify-center my-[5%] space-x-12">
            <Storage />
            <Storage />
        </div>

        <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500" onClick={()=>{setTab(3)}}>Previous</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg bg-orange-500 text-white" onClick={()=>{setTab(5)}}>Continue</button>
      </div>
      </div>
    </div>
  );
}

export default StorageLocation;
