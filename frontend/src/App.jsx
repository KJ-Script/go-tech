import { useState } from 'react'
import SideBar from './components/SideBar'
import AccountManagement from './components/AccountManagement'
import AccountConfiguration from './components/AccountConfiguration'
import DashboardAccount from './pages/DashboardAccount'
import DashboardQuotation from './pages/DashboardQuotation'


function App() {
  const [page, setPage] = useState(1)
  return (
    <>
     <div className='min-h-screen w-full flex font-montoserrat'>
      <div className="w-[15%] h-full">
        <SideBar setPage={setPage} page={page}/>
      </div>
      <div className="w-[85%] h-full">
      {
        page == 1 ? 
        <DashboardAccount />
        :
        <DashboardQuotation />
      }  
      </div>
     </div>
    </>
  )
}

export default App
