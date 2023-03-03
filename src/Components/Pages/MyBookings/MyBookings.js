import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import sad from '../../../Images/sad.jpg'

const MyBookings = () => {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/bookingData?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, [user?.email]);

  const handleDeleteBookings = datas => {
    const agreeDelete = window.confirm(`Are you sure you want to delete: ${datas?.treatmentName}`)
    if(agreeDelete){
      fetch(`http://localhost:5000/bookingData/${datas._id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      if(data?.deletedCount){
        const remaining = userData.filter(usr => usr?._id !== datas?._id)
        setUserData(remaining)
        toast.success('Delete Successfully')
      }
      console.log(data)
    })
    }
  }

  return (
    <div className="w-10/12 mx-auto my-16">
        {
            userData.length > 0 ? 
            <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Service</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((data, index) => (
                    // {data?.length > 0 ?}
                  <tr>
                    <th>{index + 1}</th>
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
          :
          <div className="flex items-center justify-center">
            <img className="w-60" src={sad} alt=""/>
            <p className="text-3xl font-semibold">You have not booked yet. <br/> Please make a booking</p>
          </div>
        }
      
    </div>
  );
};

export default MyBookings;
