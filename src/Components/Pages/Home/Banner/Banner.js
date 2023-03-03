import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../../Images/banner1.jpg";
import background from "../../../../Images/banner-bg.jpg";
import AppoinmentBtn from "../../../ShareFile/AppoinmentBtn/AppoinmentBtn";

const Banner = () => {
  return (
    // <div className="hero-content flex-col lg:flex-row-reverse">

    <section
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '100%'
        
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row md:items-center justify-between py-16 w-10/12 mx-auto">
        <div className=" lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
          <p className="text-base">We are here for you</p>
          <h1 className="text-4xl font-bold">
            What Makes Us <br />
            Better, Makes You Better.
          </h1>
          <p className="w-4/6 mx-auto lg:ml-0 lg:text-left text-lg  my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            lacus ex. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra.
          </p>
          <AppoinmentBtn></AppoinmentBtn>
        </div>
        <div className="w-full lg:w-7/12 mx-auto  rounded-xl shadow-md p-4">
          <img className="rounded-md" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
