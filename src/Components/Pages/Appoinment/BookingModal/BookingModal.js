import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate,refetch }) => {
  const { name } = treatment;
  const date = format(selectedDate, 'PP');
  const {user} = useContext(AuthContext)

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const time = form.time.value;
    const slot = form.slot.value;
    const patientName = form.names.value;
    const number = form.number.value;
    const email = form.email.value;

    const booking = {
      googleEmail : user.email,
      slot,
      patientName: patientName,
      number,
      email,
      appointmentDate: date,
      treatmentName: name,
    };
    // console.log(booking)
    setTreatment(null);

    fetch("http://localhost:5000/bookingData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data.acknowledged){
          toast.success('Congratulations! Booking Successfull')
          refetch()
        }
        else{
          toast.error(data.errMessage)
        }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    form.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-3">{treatment?.name}</h3>
          <form onSubmit={handleBooking}>
            <input
              name="time"
              type="tetxt"
              readOnly
              value={format(selectedDate, "PP")}
              className="font-semibold bg-gray-200 p-3 rounded-md mb-3 w-full"
            ></input>
            <select
        
              name="slot"
              className="select border border-gray-300 w-full mb-3"
            >
              <option>Select available time</option>
              {treatment?.slots?.map((slot) => (
                <option>{slot}</option>
              ))}
            </select>

            <input
              required
              type="text"
              name="names"
              placeholder="Full Name"
              className="border p-3 w-full rounded-md border-gray-300 mb-3"
            />
            <input
              required
              type="number"
              name="number"
              placeholder="Phone Number"
              className="border p-3 w-full rounded-md border-gray-300 mb-3"
            />
            {
              user?.email ? 
              <input
              required
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email"
              className="border p-3 w-full rounded-md border-gray-300 mb-3"
            />
            :
            <input
              required
              type="text"
              name="email"
              readOnly
              value="Please Log In First"
              className="border p-3 w-full rounded-md border-gray-300 mb-3"
            />
            }
            
            <input
              type="submit"
              value="Submit"
              className="text-white bg-black p-3 w-full rounded-md cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
