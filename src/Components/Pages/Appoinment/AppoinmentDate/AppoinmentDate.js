import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import img from "../../../../Images/bg-img-3.jpg";

const AppoinmentDate = ({ setSelectedDate, selectedDate }) => {
  return (
    <section
      className="py-10"
      style={{
        background: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <h1 className="bg-white font-bold text-center px-10 py-1">Select Your appoinment date</h1>
        <DayPicker
          className="text-white "
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        ></DayPicker>
      </div>
    </section>
  );
};

export default AppoinmentDate;
