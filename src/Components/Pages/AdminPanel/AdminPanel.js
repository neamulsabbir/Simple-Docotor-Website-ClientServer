import { faDatabase, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import BookingsData from "./BookingsData/BookingsData";
import Users from "./Users/Users";

const AdminPanel = () => {
  return (
    <div className="flex ">
      <div className="shadow w-80 bg-cyan-700">
        <div className="ml-10">
            <div className="flex items-center pr-5 mt-10 mb-7 text-white">
                <FontAwesomeIcon className="text-lg" icon={faUser}></FontAwesomeIcon>
                <Link className="font-semibold text-xl ml-5 hidden lg:block" to="/adminPanel/users">Users</Link>
            </div>
            <div className="flex items-center pr-5 text-white">
                <FontAwesomeIcon className="text-lg" icon={faDatabase}></FontAwesomeIcon>
                <Link className="text-xl font-semibold ml-5" to="/adminPanel/bookingsData">Bookings Data</Link>
            </div>
        </div>
      </div>
      <div className="ml-10 py-10 w-full">
        <Users></Users>
        <BookingsData></BookingsData>
      </div>
    </div>
  );
};

export default AdminPanel;
