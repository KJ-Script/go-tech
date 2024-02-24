import React from 'react'

function Storage() {
  return (
    <div className="w-[350px] h-[150px] py-2 border border-orange-500 rounded-lg text-xs font-semibold bg-orange-50 space-x-12">
    <div className="w-full flex px-4">
      <p className="m-2">Frozen</p>
      <div className="w-[90px] h-[20px] bg-orange-500 text-white font-light rounded-lg px-2">
        -18 celcius
      </div>{" "}
    </div>

    <div>
    <select className="border border-orange-500 h-[40px] w-[200px] bg-white text-orange-500 rounded-lg text-center" name="cars" id="cars ">
        <option value="volvo">A</option>
        <option value="saab">B</option>
        <option value="mercedes">C</option>
        <option value="audi">D</option>
      </select>
    </div>

    <div>
    <input type="number" placeholder="Amount of Pallet" className=" my-2 border border-orange-500 h-[40px] w-[200px] bg-white text-orange-500 rounded-lg text-center" name="cars" id="cars "/>
    </div>
  </div>
  )
}

export default Storage