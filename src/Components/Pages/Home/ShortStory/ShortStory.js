import React from "react";
import sideimg from "../../../../Images/sideimg";

const ShortStory = () => {
  return (
    <div className="w-10/12 mx-auto shadow-md p-4 mb-32">
      <div className="bg-slate-50 flex flex-col lg:flex-row items-center">
        <img className="w-full" src={sideimg} alt="" />
        <div className=" px-6 md:px-16 py-8 md:py-16 lg:py-0">
          <h1 className='text-3xl'>Short Story About <br/><span className='font-bold'>Docotors Portal</span> </h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.Sed do eius mod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostru .
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2	gap-4">
            <div className="bg-cyan-100 p-5 rounded-lg text-center">
              <h1 className="text-lg font-semibold">1000+</h1>
              <p className="text-sm">Happy Patients</p>
            </div>
            <div className="bg-red-100 p-5 rounded-lg text-center">
              <h1 className="text-lg font-semibold">215+</h1>
              <p className="text-sm">Expert Doctors</p>
            </div>
            <div className="bg-orange-100 p-5 rounded-lg text-center">
              <h1 className="text-lg font-semibold">315+</h1>
              <p className="text-sm">Hospital Rooms</p>
            </div>
            <div className="bg-sky-100 p-5 rounded-lg text-center">
              <h1 className="text-lg font-semibold">415+</h1>
              <p className="text-sm">Award Winner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortStory;
