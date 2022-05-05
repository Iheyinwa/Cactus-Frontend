import React, {useEffect } from 'react';
import cactuslogo from '../assets/cactuslogo.jpg';
import { BsArrowLeftCircle, BsGrid, BsWallet2 } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineUser } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { CgBriefcase } from "react-icons/cg";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import scrollreveal from "scrollreveal";
import './Sidebar.css';
import { useAuth } from '../auth-context';


export default function Sidebar ( { open, setOpen } )
{
    const navigate = useNavigate();
    const {setAuthState} = useAuth();

    useEffect( () =>
    {
        const sr = scrollreveal( {
            origin: "left",
            distance: "80px",
            duration: 1000,
            reset: false,
        } );

        sr.reveal(
            `
          .brand,
      .logout
      `,
            {
                opacity: 0,
                interval: 300,
            }
        );

    }, [] );

    const handleLogout = () => {
        localStorage.removeItem("cactus_token");
        setAuthState({});
        navigate("/");
    }
  
    return (
        <>
        <div className={ `${ open ? 'w-52' : 'w-20' } duration-300 h-screen bg-white shadow-md py-5 pl-5  pt-8 relative websidebar` } >
            <BsArrowLeftCircle className={ `absolute cursor-pointer rounded-full -right-3 top-9 w-7  ${ !open && 'rotate-180' } toogle-bar` } alt="logo"
                onClick={ () => setOpen( !open ) }
            />
            <div className= 'top'>
            <div className="flex gap-x-4 items-center brand" onClick={ () => navigate( '/dashboard' ) }>
                <img src={ cactuslogo } alt='logo' className={ `cursor-pointer duration-500 ${ open && "rotate-[360deg]"
                    }` } />
                <h1
                    className={ `text-black origin-left font-medium text-2xl duration-200 ${ !open && "scale-0"
                        }` }
                >
                    CACTUS
                </h1>
                    </div>
                    <div className="toggle">
                        { open ? (
                            <VscChromeClose onClick={ () => setOpen( false ) } />
                        ) : (
                            <GiHamburgerMenu
                                onClick={ ( e ) =>
                                {
                                    e.stopPropagation();
                                    setOpen( true );
                                } }
                            />
                        ) }
                    </div>
                </div>
                <div className="weblinks">
            <ul className="pt-6 links">
                <Link to='/dashboard'>
                    <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard" ? 'bgg' : ''}` }>
                        <BsGrid className={ `cursor-pointer duration-500` } size='20' />  <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                            Dashboard
                        </span>
                </li>
                </Link>
                <Link to='/dashboard/plans'>
                    <li
                        className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/plans" ? 'bgg' : ''}` }>
                        <CgBriefcase className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                            Plans
                        </span>
                    </li>
                </Link>
                <Link to='/dashboard/claims'>
                    <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/claims" ? 'bgg' : ''}` }>
                    <BsWallet2 className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                        Claims
                    </span>
                    </li>
                </Link>
                <Link to='/dashboard/useraccount'>
                    <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/useraccount" ? 'bgg' : ''}` }>
                        <AiOutlineUser className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                            Account
                        </span>
                    </li>
                </Link>
               
                    </ul>
                </div>
            <div className="pt-14 logout">
                <button className="flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 logout" onClick={handleLogout} >
                    <BiLogOut className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                        Logout
                </span>
                </button>
            </div>
        </div>
            <div className={ `MobileNav h-[400px] ${ open ? "show" : "notshow" }` } >
                <ul className="pt-6 mob-links" onClick={ () => setOpen( false ) }>
                    <Link to='/dashboard'>
                        <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard" ? 'bgg' : '' }` }>
                            <BsGrid className={ `cursor-pointer duration-500` } size='20' />  <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                                Dashboard
                            </span>
                        </li>
                    </Link>
                    <Link to='/dashboard/plans'>
                        <li
                            className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/plans" ? 'bgg' : '' }` }>
                            <CgBriefcase className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                                Plans
                            </span>
                        </li>
                    </Link>
                    <Link to='/dashboard/claims'>
                        <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-cactus-dark-brown text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/claims" ? 'bgg' : '' }` }>
                            <BsWallet2 className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                                Claims
                            </span>
                        </li>
                    </Link>
                    <Link to='/dashboard/useraccount'>
                        <li className={ `flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 ${ window.location.pathname === "/dashboard/useraccount" ? 'bgg' : '' }` }>
                            <AiOutlineUser className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                                Account
                            </span>
                        </li>
                    </Link>

                    <div className="pt-14 logout">
                <button className="flex rounded-md p-2 cursor-pointer hover:bg-cactus-brown hover:text-white text-black text-sm items-center gap-x-4 mt-9 logout" onClick={handleLogout} >
                    <BiLogOut className={ `cursor-pointer duration-500` } size='20' /> <span className={ `${ !open && "hidden" } origin-left duration-200 text-base` }>
                        Logout
                </span>
                </button>
            </div>

                </ul>
        </div>
        </>
    )
}
