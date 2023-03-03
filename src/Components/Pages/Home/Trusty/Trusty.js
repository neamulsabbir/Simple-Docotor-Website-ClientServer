import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../Images/bg-img-3.jpg";
import doctor from "../../../../Images/doctors.png";
import AppoinmentBtn from "../../../ShareFile/AppoinmentBtn/AppoinmentBtn";

const Trusty = () => {
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-10/12 mx-auto">
        <div>
          <img className="w-80 " src={doctor} alt="" />
        </div>
        <div className="md:w-1/2 py-10">
          <h1 className="text-4xl font-bold text-white">
            We Believe in a <br /> Healthier You
          </h1>
          <p className="text-white my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <p className="text-white my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eius mod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <AppoinmentBtn></AppoinmentBtn>
        </div>
      </div>
    </div>
  );
};

export default Trusty;
