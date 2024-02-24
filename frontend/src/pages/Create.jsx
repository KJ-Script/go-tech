import React, { useState } from 'react'
import ProductStore from '../components/ProductStore'
import StorageDate from '../components/StorageDate'
import StorageLocation from '../components/StorageLocation'
import StorageType from '../components/StorageType'
import ProductType from '../components/ProductType'

function Create() {
    const [tab, setTab] = useState(1)
  return (
    <div className='w-full min-h-screen bg-orange-50'>
    <div className='w-full flex justify-between px-[25%] mt-16 text-sm'>
        <div className={tab == 1 ? "px-3 text-white bg-orange-500 border border-orange-500 rounded-lg" :"px-3 text-orange-500 border border-orange-500 rounded-lg"}>Product Store</div>
        <div className={tab == 2 ? "px-3 text-white bg-orange-500 border border-orange-500 rounded-lg" :"px-3 text-orange-500 border border-orange-500 rounded-lg"}>Product Type</div>
        <div className={tab == 3 ? "px-3 text-white bg-orange-500 border border-orange-500 rounded-lg" :"px-3 text-orange-500 border border-orange-500 rounded-lg"}>Storage Type</div>
        <div className={tab == 4 ? "px-3 text-white bg-orange-500 border border-orange-500 rounded-lg" :"px-3 text-orange-500 border border-orange-500 rounded-lg"}>Storage Location</div>
        <div className={tab == 5 ? "px-3 text-white bg-orange-500 border border-orange-500 rounded-lg" :"px-3 text-orange-500 border border-orange-500 rounded-lg"}>Storage Date</div>
    </div>  
    {tab ==1 ?
      <ProductStore setTab={setTab}/>
      : 
      <></>
    }

    {tab == 2 ?
      <ProductType setTab={setTab}/>
      : 
      <></>
    }

    {tab == 3 ?
      <StorageType setTab={setTab}/>
      : 
      <></>
    }

    {tab == 4 ?
      <StorageLocation setTab={setTab}/>
      : 
      <></>
    }

    {tab == 5 ?
      <StorageDate setTab={setTab}/>
      : 
      <></>
    }
    </div>
  )
}

export default Create