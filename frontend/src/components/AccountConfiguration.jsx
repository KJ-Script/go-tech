import React from "react";

function AccountConfiguration() {
  return (
    <div className="w-full h-[80%] bg-orange-50 px-3 py-[5%]">
      <div className="text-orange-500">Account Configuration</div>
      <div className="font-bold my-3">Company Information</div>
      <div className="font-light">
        Set and update your company information here
      </div>
      <div className="font-light">Company Logo</div>
      <div className="h-[180px] bg-white rounded-lg mx-3 border-2 border-orange-500 border-dashed flex items-center justify-center">
        <div className="font-light flex space-x-1">
          <p>Drag and Drop profile picture here or </p>{" "}
          <p className="font-bold hover:underline">Bold</p>
        </div>
      </div>

      <div className="w-full flex">
        <div className="w-[50%] space-y-4">
          <label for="companyname">Company Name</label>
          <br></br>
          <input
            name="companyname"
            placeholder="company name"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="vat">VAT Number</label>
          <br></br>
          <input
            name="vat"
            placeholder="VAT Number"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="country">Country</label>
          <br></br>
          <input
            name="country"
            placeholder="Country"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="email">Email</label>
          <br></br>
          <input
            name="email"
            placeholder="email"
            className="h-[50px] w-[50%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>
        </div>

        <div className="w-[50%] space-y-4">
          <label for="name">Name</label>
          <br></br>
          <input
            name="name"
            placeholder="Name"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="reg">Commercial Registration Number</label>
          <br></br>
          <input
            name="reg"
            placeholder="Registration Number"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="phone">Phone Number</label>
          <br></br>
          <input
            name="phone"
            placeholder="Phone Number"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>

          <label for="address">Address</label>
          <br></br>
          <input
            name="address"
            placeholder="Address"
            className="h-[50px] w-[80%] border-2 border-orange-500 rounded-lg px-2"
          />
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default AccountConfiguration;
