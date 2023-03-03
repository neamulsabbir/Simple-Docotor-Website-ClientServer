import React from 'react';
import docotr1 from '../../../../Images/doctors/doctor1.jpg'
import docotr2 from '../../../../Images/doctors/doctor2.jpg'
import docotr3 from '../../../../Images/doctors/docotr3.jpg'
import Doctor from '../Doctor/Doctor';


const Docotors = () => {
    const doctors = [
        {
            _id: 1,
            img: docotr3,
            name: "Dr. Mary Joe",
            tittle: "Neorology",
            bgColor:'bg-sky-50'
        },
        {
            _id: 2,
            img: docotr1,
            name: "Dr. Hessy Hanna",
            tittle: "Cardiology",
            bgColor:'bg-cyan-50'
        },
        {
            _id: 3,
            img: docotr2,
            name: "Dr. Thomas Jack",
            tittle: "Pathology",
            bgColor:'bg-red-50'
        },
        {
            _id: 4,
            img: docotr3,
            name: "Dr. Mary Joe",
            tittle: "Neorology",
            bgColor:'bg-orange-50'
        }
    ]
    return (
        <div className='w-10/12 mx-auto my-32'>
            <p className='text-blue-800 font-semibold text-center'>Our Teams</p>
            <h1 className='text-3xl font-bold text-center'>Our Dedicated Doctors</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    doctors.map(doctor => <Doctor key={doctor?._id} doctor={doctor}  ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Docotors;