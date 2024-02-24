import React from 'react'

function StorageDate({setTab}) {
  return (
    <div>
      <div className="w-full">
        <div className="w-full flex justify-center my-[5%]">
          <p className="text-xl font-semibold">Storage Pickup Date</p>
        </div>
        <div className="w-full flex justify-center my-[5%] space-x-12">
            <input type="date" className='border border-orange-500 h-[40px] w-[200px] bg-white text-orange-500 rounded-lg text-center'/>
        </div>

        <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500" onClick={()=>{setTab(3)}}>Go back</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg bg-orange-500 text-white" onClick={()=>{setTab(5)}}>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default StorageDate