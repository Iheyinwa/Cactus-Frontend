import React from 'react';
import Activity from "../Activity/Activity";
import chart from "../../assets/chart.png";
import transgreen from "../../assets/Trans-green.png";
import transred from "../../assets/Trans-red.png";
import { useAuth } from "../../auth-context";

export default function DashboardHome({open}) {
  const { authState } = useAuth();
  return (
    <div className="container lg:flex">
      <div className={ `${open ? 'lg:w-4/6' :'lg:w-full'}  mr-5` }>
        <div className="bg-white  p-12">
          <h1 className="text-2xl font-bold">Welcome Back, {authState?.name?.split(" ")[0]} </h1>
          <p>Let's do the best today</p>
        </div>
        <div className="bg-white p-12 border border-gray mx-auto">
          <div className="bg-white shadow-md border-cactus-brown border mb-3 rounded-lg">
            <div className="flex justify-between p-10">
              <div className='flex items-center justify-center w-[50%]'>
                <div>
                  <h5 className='text-gray-400'>Total Wallet Balance</h5>
                <p className="text-4xl bold"># 2,000,000</p>  {/*Here you update the value to the real data */}
                </div>
                
              </div>
              <div className='border border-cactus-brown border h-40 '></div>
              <div className='flex flex-col items-center justify-between w-[50%]'>
                <div className="flex gap-3">
                  <img src={transgreen}  className='h-8' alt='green'/>
                  <div>
                    <h3 className='text-gray-600'>Inflow</h3>
                    <h4 className='text-xl bold'>#200,000</h4> {/*Here you update the value to the real data */ }
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ transred } className='h-8' alt='red'/>
                  <div>
                    <h3 className='text-gray-600'>Payout</h3>
                    <h4 className='text-xl bold'>#500,000</h4> {/*Here you update the value to the real data */ }
                  </div>
                </div>
              </div>
             </div>
          </div>
          <div className="mt-5">
            <img src={ chart } alt='chart' /> {/*Here you update the chart to  real chart not image*/ }
          </div>
          <div>
            <h2>To-do List</h2>
          </div>
        </div>
      </div>

      <div className={ `shadow-md ${ open ? 'lg:w-1/3' : 'lg:w-1/2'} p-8` }>
        <Activity /> {/*Here you update the value to the real data */ }
      </div>
    </div>
      
   
  )
}
