import React from 'react';
import { Link } from 'react-router-dom';


export default function UserNav() {
  return (
    <nav className="p-5 ">
      <ul className="flex justify-between">
        <Link to="/dashboard/useraccount" className="text-cactus-brown">
          <li className="pl-6 pr-6"> Update user profile</li>
        </Link>
        <Link
          to="/dashboard/mywallet"
          className="text-cactus-brown"
        >
          <li className="pl-6 pr-6">My wallet</li>
        </Link>
        <Link
          to="/dashboard/banksettings"
          className="text-cactus-brown"
        >
          <li className="pl-6 pr-6">Bank Settings</li>
        </Link>
        <Link
          to="/dashboard/contactus"
          className="text-cactus-brown"
        >
          <li className="pl-6 pr-6">Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
