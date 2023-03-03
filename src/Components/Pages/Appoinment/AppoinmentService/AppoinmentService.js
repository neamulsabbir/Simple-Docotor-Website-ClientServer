import React from 'react';

const AppoinmentService = ({data,setTreatment}) => {
    return (
        <div className='shadow-md p-6 rounded-xl'>
            <h1 className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600'>{data?.name}</h1>
            <p>{data?.slots.length > 0 ? data?.slots[0] : 'Please Try another day'}</p>
            <p className='mb-6'>{data?.slots?.length} time available </p>
            <label htmlFor="my-modal-3" onClick={() => setTreatment(data)} className="cursor-pointer bg-gradient-to-r from-sky-400 to-blue-600 p-3 font-semibold text-white text-xs rounded-xl">Book Appoinment</label>
        </div>
    );
};

export default AppoinmentService;