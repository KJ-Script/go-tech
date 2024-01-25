import React from 'react'

function SideBar({setPage, page}) {
  return (
    <div className='flex flex-col m-2 space-y-2 h-screen px-2 py-[15vh] bg-orange-50'>
        <button className={page == 1 ? "border-2 border-orange-500 rounded-lg h-12 bg-orange-500 text-white" : "border-2 border-orange-500 rounded-lg h-12 text-orange-500 hover:bg-orange-500 hover:text-white"} onClick={() => {setPage(1)}}>Quotations</button>
        <button className={page ==2 ? "border-2 border-orange-500 rounded-lg h-12 bg-orange-500 text-white" : "border-2 border-orange-500 rounded-lg h-12 text-orange-500 hover:bg-orange-500 hover:text-white"}pag onClick={() => {setPage(2)}}>Accounts</button>
    </div>
  )
}

export default SideBar