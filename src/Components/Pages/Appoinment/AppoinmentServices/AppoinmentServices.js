import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentService from '../AppoinmentService/AppoinmentService';
import BookingModal from '../BookingModal/BookingModal';

const AppoinmentServices = ({selectedDate}) => {
    // const [appoinmentData, setAppoinmentData] = useState([])
    const [treatment, setTreatment] = useState({})
    const date = format(selectedDate,'PP')
    // console.log(treatment)

    const { data: appoinmentData = [], refetch } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentService?date=${date}`);
            const data = await res.json();
            return data
        }
    });

    /* useEffect(() => {
        fetch('http://localhost:5000/appoinmentService')
        .then(res => res.json())
        .then(data => setAppoinmentData(data))
    },[]) */
    return (
        <div>
            <p className='text-center font-semibold my-16 '>Available service on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto text-center mb-32'>
                {
                    appoinmentData.map(data => 
                    <AppoinmentService 
                    key={data._id} 
                    data = {data}
                    setTreatment={setTreatment}></AppoinmentService>)
                }
            </div>
            {
                treatment && 
                <BookingModal 
                key={treatment._id} 
                treatment={treatment} 
                setTreatment={setTreatment} 
                selectedDate={selectedDate}
                refetch= {refetch}
                ></BookingModal>
            }
            
        </div>
    );
};

export default AppoinmentServices;