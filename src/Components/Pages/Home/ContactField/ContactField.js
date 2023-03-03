import React from "react";
import medicalBg from "../../../../Images/blackbg.jpg";

const ContactField = () => {
  return (
    <div
      style={{
        background: `url(${medicalBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="text-center flex flex-col items-center mx-auto w-10/12 py-10">
        <h3 className="text-xl text-blue-500">Contact Us</h3>
        <h3 className="text-xl text-white">Stay Connected With Us</h3>

        <input
          className="block p-5 rounded-md md:w-80 h-10 mt-5"
          type="text"
          placeholder="Email"
        />
        <input
          className="block p-5 rounded-md md:w-80 h-10 mt-5"
          type="text"
          placeholder="Subject"
        />
        <input
          className="block p-5 rounded-md md:w-80 h-20 my-5"
          type="text"
          placeholder="Your Message"
        />
        <input className="bg-gradient-to-r from-sky-400 to-blue-600 p-3 px-5 font-semibold text-white rounded-md text-sm mt-5 " type="submit" value="Submit" />
        
      </div>
    </div>
  );
};

export default ContactField;
