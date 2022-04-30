import React from 'react'
// import changechecker from '../assets/changepassword.png'
// import { useAuth } from '../auth-context';

export default function UserProfile() {
  // const {authState} = useAuth();
  return (
      <div>
          {/* <div className="bg-white  p-12">
              <h1 className="text-2xl font-bold">Welcome Back, Joy</h1>
          </div> */}
      <div className="bg-white px-5 py-12 border">
        
        <div>
          <h2 className="font-bold text-base">Change Password</h2>
          <p className="text-gray">Please update your personal information</p>
        </div>
        <form className=''>
          <div className="py-8 flex justify-between">
            <label className="w-[30%] pr-3">Current password</label>
            <input className="w-[70%] border rounded-md border outline-none p-2" type="password" placeholder="Current Password" />
          </div>
          <div className="py-8 flex justify-between">
            <label className="w-[30%] pr-3">New password</label>
            <input className="w-[70%] border rounded-md border outline-none p-2" type="password" placeholder="New Password" />
          </div>
          <div className="py-8 flex justify-between">
            <label className="w-[30%] pr-3">Confirm new password</label>
            <input className="w-[70%] border rounded-md outline-none p-2" type="password" placeholder="New password" />
          </div>
          <div className='w-full flex justify-end'>
            
                    <button
                      className="text-lg font-medium bg-white text-white bg-cactus-brown hover:text-cactus-brown hover:bg-white hover:border-cactus-brown hover:border-2 px-[3rem] px-3 py-2 rounded-lg"
                    >
                      Save
                    </button>
              
          </div>

        </form>
            {/* <img src={changechecker} alt="changechecker" className="w-full h-auto" /> */}
          </div>
    </div>
  )
}
