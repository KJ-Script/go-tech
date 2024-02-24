import React from 'react'

function ProductStore({setTab}) {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-center my-[5%]'>
        <p className='text-xl font-semibold'>Choose a Product Store</p>
      </div>

      <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">Pallet</button>
        <button className="px-8 py-2 border border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 hover:text-white bg-orange-50">SQM</button>

      </div>

      <div className='w-full flex justify-center my-[5%] space-x-12'>
        <button className="px-8 py-2 border border-orange-500 rounded-lg bg-orange-500 text-white" onClick={()=>{setTab('2')}}>Continue</button>
      </div>

    </div>
  )
}

export default ProductStore