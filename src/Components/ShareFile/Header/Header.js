import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAdmin from "../../../customHook/useAdmin/useAdmin";
import logo from "../../../Images/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  // console.log(isAdmin)

  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className="bg-white drop-shadow sticky top-0 z-10">
      <div className="navbar justify-between 	lg:w-10/12 mx-auto">
        <div className="navbar">
          <div className="dropdown ml-8 md:ml-20 lg:ml-0">
            <label tabIndex={0} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg w-72"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/appoinment">Appoinment</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/myBookings/user">My Bookings</Link></li>
              {
                isAdmin && <li><Link to="/adminPanel">Admin Panel</Link></li>
              }
              
             
              {user?.uid ? 
                  <>
                    <div className="bg-gray-200 w-full h-[1.5px] my-3"></div>
                    <li  className="ml-4 mb-2 text-sm">Loged in as</li>
                    <div className="flex items-center">
                      <img
                        className="rounded-3xl w-10 h-10 ml-4 mr-4"
                        src={user?.photoURL}
                        alt=""
                      />
                      <div>
                        <h1 className="font-bold ">{user?.displayName}</h1>
                        <h1 className="mb-2 text-sm">{user?.email}</h1>
                      </div>
                    </div>
                    
                  </>
              : (
                  <>
                  <div className="bg-gray-200 w-full h-[1.5px] my-3"></div>
                    <h1 className="ml-4 mb-2 text-sm">Loged in as</h1>
                    <div className="flex flex-col">
                    <FontAwesomeIcon className="p-0" icon={faUser}></FontAwesomeIcon>
                    <h1 className="font-bold ">{user?.displayName}</h1>
                    </div>
                  </>
            )}
              <div className="bg-gray-200 w-full h-[1.5px] my-3"></div>

              {
                user?.uid ? 
                  <h1 className="cursor-pointer bg-cyan-700 text-white mb-2 py-1 pl-3 block rounded-lg" onClick={handleSignOut}>Sign Out</h1>
                :
                <div className="">
                  <Link className="bg-cyan-700 text-white mb-2 py-1 pl-3 rounded-lg block" to="/login">
                    Log In
                  </Link>
                  <Link className="bg-cyan-700 text-white mb-2 py-1 pl-3  rounded-lg block" to="/register">
                    Register
                  </Link>
                  
                </div>
              }
            </ul>
          </div>
          <Link to="/">
            <img className="w-36 ml-7 lg:ml-0" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/appoinment">Appoinment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                {
                  user?.photoURL ?
                  <>
                    <img className="rounded-3xl w-10 h-10 " src={user?.photoURL} alt=""/>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </>
                  :
                  <>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </>
                }
            </label>
              <ul tabIndex={0} className="menu menu-horizontal dropdown-content p-4  shadow bg-base-100 rounded-md flex-col mt-16 text-right">
              {
                user?.uid && 
                <div>
                  <h1 className="">Loged in as</h1>
                  <h1 className="font-bold ">{user?.displayName}</h1>
                  <h1>{user?.email}</h1>
                </div>
              }
              <div className="bg-gray-200 w-full h-[1.5px] my-3"></div>
              <Link className="mb-2 hover:bg-gray-200 hover:py-1 hover:px-3 hover:rounded-md" to="/myBookings/user">My Bookings</Link>
              {
                isAdmin && <Link className="mb-2 hover:bg-gray-200 hover:py-1 hover:px-3 hover:rounded-md" to="/adminPanel">Admin Panel</Link>
              }
              <div className="bg-gray-200 w-full h-[1.5px] my-3"></div>

              {
                user?.uid ? 
                  <h1 className="cursor-pointer bg-cyan-700 text-white mb-2 py-1 pr-3 rounded-md block" onClick={handleSignOut}>Sign Out</h1>
                :
                <div className="">
                  <Link className="bg-cyan-700 text-white mb-2 py-1 pr-3 block" to="/login">
                    Log In
                  </Link>
                  <Link className="bg-cyan-700 text-white mb-2 py-1 pr-3 block" to="/register">
                    Register
                  </Link>
                  
                </div>
              }
            </ul>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
