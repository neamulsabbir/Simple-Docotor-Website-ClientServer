import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className={`p-4 mt-10 ${doctor?.bgColor}`}>
            <img className='w-full lg:w-80' src={doctor?.img} alt=""/>
            <h1 className='text-xl font-semibold text-center'>{doctor?.name}</h1>
            <p className='text-lg text-center'>{doctor?.tittle}</p>
        </div>
    );
};

export default Doctor;