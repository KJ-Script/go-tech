import React from 'react'

function MyQuotations() {
  return (
    <div className='w-full h-[10%] bg-orange-50 px-3 py-[5%] flex justify-between px-4'>
    <div>
    <div className="font-bold" >My Quotations</div>
    <div className="font-light">These are the list of quotations you can edit, create monitor and reorder.</div>
    </div>
    <div>
        <button className='w-[150px] h-[60px] bg-orange-500 text-white rounded-lg px-1'>Create Quotation</button>
    </div>
    
</div>
  )
}

export default MyQuotations