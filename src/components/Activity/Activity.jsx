import React, {useState} from "react";
import Calendar from 'react-calendar';
import profile from '../../assets/profile.png';
import { BiBell } from 'react-icons/bi';
import StarRating from "../StarRating";
import { Progress } from '@chakra-ui/react'
// import spiral from '../../assets/spiral.png';
import { useAuth } from "../../auth-context";


const Activity = () =>
{
    const [ date, setDate ] = useState( new Date() );
    const [ log, setLog ] = useState( 3 );
    const { authState } = useAuth();

    return (
        <div className="bg-light-white">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border-2 border-cactus-brown rounded-full p-1 cursor-pointer">
                            <img src={ profile } alt='profileImage'/>
                        </div>
                        <h2 className="font-medium text-base">{authState?.name?.split(" ")[0]}</h2>
                    </div>
                    <div className="rounded-full bg-light-white shadow cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
                        <BiBell size='20' />
                    </div>
                </div>
                <div className="w-[90%] mx-auto rounded-md shadow-md p-3 bg-light-white mt-8">
                    <h2 className="font-medium text-base mb-3">Upcoming Payments</h2>
                    <div className="h-[10rem] overflow-auto">
                        <Calendar onChange={setDate} value={ date } />
                    </div>
                </div>
                <div className='border-b-2 border-gray-200 h-1 mt-8'></div>
                <div className="rounded-md shadow-md z-20 bg-light-white mt-8 mb-10 p-3">
                    {/* <div className='flex items-center gap-2'>
                        <img src={ profile } alt='profileImage' />
                        <h2 className="font-medium text-base">Name</h2>
                    </div> */}
                    <div className='flex items-center justify-between mb-3'>
                        <StarRating onChange={ setLog} /> {/* Rating Components will be here */}
                        <h2 className="font-medium text-xl">{log} <span className="text-xs text-gray-400">out of 5 stars</span></h2>
                    </div>
                    <div>
                        <div className='flex items-center justify-between'>
                            <h2 className="w-[30%]">Excellent</h2>
                            <div className="w-[60%]"><Progress value={36} colorScheme='green' size='md' /></div>
                            <h3 className="w-[10%] text-right">36</h3>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className="w-[30%]">Good</h2>
                            <div className="w-[60%]"><Progress value={25} colorScheme='whatsapp' size='md' /></div>
                            <h3 className="w-[10%] text-right">25</h3>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className="w-[30%]">Average</h2>
                            <div className="w-[60%]"><Progress value={20} colorScheme='yellow' size='md' /></div>
                            <h3 className="w-[10%] text-right">20</h3>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className="w-[30%]">Avg Below</h2>
                            <div className="w-[60%]"><Progress value={15} colorScheme='orange' size='md' /></div>
                            <h3 className="w-[10%] text-right">15</h3>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className="w-[30%]">Poor</h2>
                            <div className="w-[60%]"><Progress value={5} colorScheme='pink' size='md' /></div>
                            <h3 className="w-[10%] text-right">05</h3>
                        </div>
                    </div>
                </div>
                <div className="rounded-md shadow z-20 p-2 bg-light-white ">
                    <div className="rounded-md bg-cactus-brown p-5 flex">
                        <div>
                            <h2 className="text-white text-base font-medium">Do You Still Need Our Help?</h2>
                            <p className="text-xs text-white">Send your request via email</p>
                            
                            <button className="bg-light-white rounded-md p-4 mt-2" >
                                <h3 className='text-cactus-brown font-medium'>Send Request</h3>
                            </button>
                            
                        </div>
                        {/* <div className="absolute bg-cactus-brown">
                            <img src={ spiral } alt='spiralImage' />
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Activity;
