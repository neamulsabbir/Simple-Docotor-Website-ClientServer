import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const BookingsData = () => {
    const [bookingDatas, setBookingDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingData')
        .then(res => res.json())
        .then(data => setBookingDatas(data))
    },[])

    const handleDeleteBookings = datas => {
        const agreeDelete = window.confirm(`Are you sure you want to delete: ${datas?.treatmentName}`)
        if(agreeDelete){
          fetch(`http://localhost:5000/bookingData/${datas._id}`,{
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          if(data?.deletedCount){
            const remaining = bookingDatas.filter(usr => usr?._id !== datas?._id)
            setBookingDatas(remaining)
            toast.success('Delete Successfully')
          }
          console.log(data)
        })
        }
      }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {bookingDatas.map((data, index) => (
                    // {data?.length > 0 ?}
                  <tr>
                    <th>{index + 1}</th>
                    <td>{data?.email}</td>
                    <td>{data?.patientName}</td>
                    <td>{data?.treatmentName}</td>
                    <td>{data?.slot}</td>
                    <td>{data?.appointmentDate}</td>
                    <button onClick={() => handleDeleteBookings(data)} 
                    className="bg-red-600 text-white py-1 px-2 mt-4 ml-4 rounded-lg text-sm">Delete</button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    );
};

export default BookingsData;