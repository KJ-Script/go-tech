import React from 'react'

function DashboardFilterBox() {
  return (
    <div className='flex space-x-1'>
    <p>Filter by</p>
    <select className="border border-orange-500 h-[30px] w-[150px] bg-orange-500 text-sm text-white rounded-lg text-center">
        <option value="volvo">Storage Type</option>
        <option value="saab">Product Type</option>
        <option value="mercedes">Product Storage</option>
        <option value="audi">Storage Date</option>
        <option value="audi">Storage Location</option>
        
    </select>
    </div>
  )
}

export default DashboardFilterBox