import React from 'react'

function StorageType({setTab}) {
  return (
    <div className='w-full'>
    <div className='w-full flex justify-center my-[5%]'>
      <p className='text-xl font-semibold'>Storage Temprature</p>
    </div>

    <div className='-full flex justify-center my-[5%] space-x-12'>
      <div className="w-[350px] h-[50px] py-2 border border-orange-500 rounded-lg text-xs font-semibold bg-orange-50 flex px-4 space-x-12"><p className='m-2'>Frozen</p> <div className='w-[90px] h-[20px] bg-orange-500 text-white font-light rounded-lg px-2'>-18 celcius</div> <div></div></div>
      <div className="w-[350px] h-[50px] py-2 border border-orange-500 rounded-lg text-xs font-semibold bg-orange-50 flex px-4 space-x-12"><p className='m-2'>Chilled</p> <div className='w-[90px] h-[20px] bg-orange-500 text-white font-light rounded-lg px-2'>5-15 celcius</div> <div></div></div>
    </div>

    <div className='-full flex justify-center my-[5%] space-x-12'>
      <div className="w-[350px] h-[50px] py-2 border border-orange-500 rounded-lg text-xs font-semibold bg-orange-50 flex px-4 space-x-12"><p className='m-2'>Ambient</p> <div className='w-[90px] h-[20px] bg-orange-500 text-white font-light rounded-lg px-2'>18-25 celcius</div> <div></div></div>
      <div className="w-[350px] h-[50px] py-2 border border-orange-500 rounded-lg text-xs font-semibold bg-orange-50 flex px-4 space-x-12"><p className='m-2'>Dry</p> <div className='w-[90px] h-[20px] bg-orange-500 text-white font-light rounded-lg px-2'>25+ celcius</div> <div></div></div>
    </div>

    <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500" onClick={()=>{setTab(2)}}>Previous</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg bg-orange-500 text-white" onClick={()=>{setTab(4)}}>Continue</button>
      </div>
1
  </div>
  )
}

export default StorageType