import React from "react";
import MyQuotations from "../components/MyQuotations";
import DashboardFilterBox from "../components/DashboardFilterBox";
import DashboardItem from "../components/DashboardItem";

function DashboardQuotation() {
  return (
    <div className="py-8 w-full">
      <MyQuotations />
      <div className="my-4 w-full">
        <div className="flex justify-between mx-12">
          <input
            type="text"
            placeholder="search"
            className=" my-2 border border-orange-500 h-[40px] w-[400px] bg-orange-50 text-orange-500 rounded-lg text-center"
          />
          <DashboardFilterBox />
        </div>

        <div className="w-full flex flex-col items-center my-4">
          <div className="w-[80%] flex justify-between bg-orange-500 px-2 py-1 text-white">
            <p>ID</p>
            <p>Product Type</p>
            <p>Storage Type</p>
            <p>Pallet Number</p>
            <p>Storage City</p>
            <p>Start Date</p>
            <p>Pickup Date</p>
          </div>
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem /> 
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />

          <div className="w-[80%] flex justify-center space-x-2  px-2 py-1 text-black">
              <p className="hover:underline text-black hover:text-orange-500">Prev</p>
              <p className="hover:underline text-black hover:text-orange-500">(page 1 out of 5)</p>
              <p className="hover:underline text-black hover:text-orange-500">Next</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardQuotation;
