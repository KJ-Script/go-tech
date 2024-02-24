import React from 'react'
import { useState } from 'react'
import SideBar from '../components/SideBar'
import DashboardAccount from './DashboardAccount'
import DashboardQuotation from './DashboardQuotation'

function Dashboard() {
    const [page, setPage] = useState(1)
  return (
   <>
   <div className='min-h-screen w-full flex'>
      <div className="w-[15%] h-full">
        <SideBar setPage={setPage} page={page}/>
      </div>
      <div className="w-[85%] h-full">
      {
        page == 1 ? 
        <DashboardQuotation />
        :
        <DashboardAccount />
      }  
      </div>
     </div>
   </>
  )
}

export default Dashboard