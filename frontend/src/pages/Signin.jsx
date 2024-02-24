import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col-2 font-sans h-screen">
    <div className="flex-2 w-1/2 h-screen bg-[#F07B52] justify-center font-bold text-white text-center relative ">
        <h1 className="text-5xl m-auto justify-center text-center absolute top-1/2 mb-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome
        </h1>
        <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12">
            Welcome Back to Go Inventory. Please sign in to get started. 
        </p>
    </div>
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-[#F6F3F3] col-auto">
        <h1 className="text-5xl mb-6 text-[#F07B52] font-bold">
                Welcome
            </h1>
            <form >
    
      <br /> <br />
            <label htmlFor="CompanyName" className="font-extralight text-[#F07B52]"  >Company Name</label>
      <br></br>
      <input
        name="companyName"
        placeholder="Company Name"
        className="h-[40px] w-96 border-2 border-[#F07B52]  rounded-lg px-2 mt-3"
        required
      />
         <br /> <br />
            <label htmlFor="Email" className="font-extralight text-[#F07B52]" >Email</label>
      <br></br>
      <input
        name="email"
        placeholder="email"
        className="h-[40px] w-96 border-2 border-[#F07B52]  rounded-lg px-2 mt-3"
        required
      />
         <br /> <br />
            <label htmlFor="Password" className="font-extralight text-[#F07B52]" >Password</label>
      <br></br>
      <input
        name="Password"
        placeholder="Password"
        className="h-[40px] w-96 border-2 border-[#F07B52]  rounded-lg px-2 mt-3"
        required
      />
         <br /> <br />
      
            </form>
            <p className="mt-2">Don't have an account? <a href="" className="text-[#F07B52] hover:text-black ">SignUp</a></p>
            <button className="justify-center  pl-5 pr-5 bg-[#F07B52] text-white hover:text-[#F07B52] hover:bg-white p-4 mt-5 border-2 border-[#F07B52] rounded-xl cursor-pointer duration-300" onClick={() => {navigate('/dashboard')}}>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default Signin