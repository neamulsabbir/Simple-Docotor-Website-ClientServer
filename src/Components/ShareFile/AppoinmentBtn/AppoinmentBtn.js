import React from 'react';
import { Link } from 'react-router-dom';

const AppoinmentBtn = () => {
    return (
        <button className="bg-gradient-to-r from-sky-400 to-blue-600 p-3 font-semibold text-white rounded-xl text-xs">
            <Link to="/appoinment">Make Appoinment</Link>
        </button>
    );
};

export default AppoinmentBtn;