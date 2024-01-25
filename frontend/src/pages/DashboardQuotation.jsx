import React from 'react'
import MyQuotations from '../components/MyQuotations'

function DashboardQuotation() {
  return (
    <div className="py-8">
        <MyQuotations />
        <div className="mt-[250px] mx-[480px] text-xl">
            <p>Sorry, you have no quotations to view at the moment</p>
        </div>
    </div>
  )
}

export default DashboardQuotation