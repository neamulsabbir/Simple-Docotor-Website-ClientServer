import React from 'react';

const Service = ({service}) => {
    return (
        <div className={`rounded-xl shadow px-4 py-12 lg:w-96 ${service?.bgColor}`}>
            <img className="ml-3" src={service?.img} alt="" />
            <div className="ml-5">
              <h1 className="text-2xl font-semibold mt-5">{service?.name}</h1>
              <p className="text-sm my-10">{service?.details}</p>
              <button className="btn">Read More</button>
            </div>
          </div>
    );
};

export default Service;