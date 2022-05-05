import React from 'react';
import transgreen from  "../assets/Trans-green.png";
import transred from "../assets/Trans-red.png";
import mastercard from "../assets/Mastercard.png"

export default function MyWallet() {
  return (
    <div>
      <div className="bg-white p-12 border border-gray mx-auto">
        <div className="bg-white shadow-md border-cactus-brown border mb-3 rounded-lg">
          <div className="md:flex justify-between gap-4 p-10">
            <div className="flex flex-col items-center">
              <img src={ mastercard } alt="mastercard" className="h-40" />
              <button className="bg-cactus-brown text-white text-center px-20 mt-8 py-2 rounded-lg">Withdraw</button>
            </div>
            <div className='border border-cactus-brown border h-40 '></div>
            <div className='flex flex-col items-center justify-between w-[50%]'>
              <div className="flex gap-3">
                <img src={ transgreen } className='h-8' alt='green' />
                <div>
                  <h3 className='text-gray-600'>Inflow</h3>
                  <h4 className='text-xl bold'>#200,000</h4> {/*Here you update the value to the real data */ }
                </div>
              </div>
              <div className="flex gap-3">
                <img src={ transred } className='h-8' alt='red' />
                <div>
                  <h3 className='text-gray-600'>Payout</h3>
                  <h4 className='text-xl bold'>#500,000</h4> {/*Here you update the value to the real data */ }
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="">
          <div>
            <h2 className="font-bold">Recent Transactions</h2>
            </div>
        </div>
      </div>
      
    </div>
  )
}
