import React from 'react'

function ProductType({setTab}) {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center my-[5%]'>
        <p className='text-xl font-semibold'>What are your Product types? (Choose only one)</p>
      </div>

      <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Food and Beverages</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Chemicals</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Machinery</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Medication</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Cosmotics</button>

    

      </div>

      <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500" onClick={()=>{setTab(1)}}>Previous</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg bg-orange-500 text-white" onClick={()=>{setTab(3)}}>Continue</button>
      </div>
1
    </div>
  )
}

export default ProductType