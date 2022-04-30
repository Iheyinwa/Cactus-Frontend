import React, {useState} from 'react';
import BankSetting from '../BankSettings';
import ContactUs from '../ContactUs';
import MyWallet from '../MyWallet';
import UserProfile from '../UserProfile';
import Activity from '.././Activity/Activity';

export default function UserAccount ( { open, setOpen } ) {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = [
    { name: "Update profile", id: 1 },
    { name: "My Wallet", id: 2 },
    { name: "Bank settings", id: 3 },
    { name: "Contact Us", id: 4 },
  ];
  return (
    <div className="container lg:flex justify-center">
      <div className='lg:w-full px-5'>
        <div className='w-full mt-10 flex justify-around items-center'>
          {tabs.map((tab, idx) => {
            return (
              <div
          key={idx}
          onClick={()=>setActiveTab(tab.id)}
          className={`tab text-md cursor-pointer font-medium ${
                      tab.id === activeTab
                        ? "text-cactus-brown tab-bordered border-cactus-brown"
                        : "text-[#212121]"
                    }`} 
          >{tab.name}</div>
            )
          
        })}
        </div>
        
        <div className='mt-10'>
          { activeTab === 1 && <UserProfile /> }
          { activeTab === 2 && <MyWallet /> }
          { activeTab === 3 && (
          <BankSetting />
        ) }
          { activeTab === 4 && (
          <ContactUs />
        ) }
        </div>
      </div>
      <div className={ `shadow ${ open ? 'lg:w-1/3' : 'lg:w-1/2' } p-8` }>
        <Activity /> {/*Here you update the value to the real data */ }
      </div>
    </div>
  )
}
