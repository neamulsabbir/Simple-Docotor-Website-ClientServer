import React from "react";


const OnlineForm = () => {
  return (
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto my-16 lg:my-32 lg:border-2 lg:border-cyan-700 lg:p-10 lg:items-center lg:rounded-lg">
      <div className="lg:w-1/2 lg:mr-10">
        <h1 className="text-3xl font-semibold text-cyan-700">Contact</h1>
        <p className="text-lg font-medium my-3">Phone: +880 01938927389</p>
        <p className="text-lg font-medium mb-3">Email: contact@lifelinecare.com</p>
        <p>It is important you notify us of any change of address and phone number immediately. We will ask you to identify yourself with your current address and date of birth.</p>
        <p>If you have a change of name please attend the surgery with the appropriate documentation.</p>
      </div>
      <div className="flex flex-col lg:items-start mx-auto w-10/12 lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
        <div>
          <h1 className="text-3xl font-semibold text-cyan-700">
            Online Contact
          </h1>
          <p>
            Feedback from this form is not monitored outside of normal business
            hours. If you have a medical or mental health emergency, please call
            000.
          </p>
          <p>
            We are unable to provide medical advice or answer individual
            questions about treatment - these issues should be raised with your
            doctor.
          </p>
          <h3 className="text-lg font-medium mt-10">Stay Connected With Us</h3>
        </div>
        <form className="">
          <input
            className="block p-5 rounded-md md:w-80 h-10 mt-5 border-cyan-700 border-2"
            type="text"
            placeholder="Email"
          />
          <input
            className="block p-5 rounded-md md:w-80 h-10 mt-5 border-cyan-700 border-2"
            type="text"
            placeholder="Subject"
          />
          <input
            className="block p-5 rounded-md md:w-80 h-20 my-5 border-cyan-700 border-2"
            type="text"
            placeholder="Your Message"
          />
          <input
            className="bg-gradient-to-r from-sky-400 to-blue-600 p-3 px-5 font-semibold text-white rounded-md text-sm mt-5 "
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default OnlineForm;
