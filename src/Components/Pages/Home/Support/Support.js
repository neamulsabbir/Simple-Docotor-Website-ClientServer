import React from 'react';

const Support = ({support}) => {
    return (
        <div className="flex items-center rounded-2xl shadow-md p-4">
            <img  src={support.img} alt="" />
            <div className="ml-5">
                <h1 className="text-lg font-semibold">{support.tittle}</h1>
                <p className="text-sm">{support.details}</p>
            </div>
          </div>
    );
};

export default Support;