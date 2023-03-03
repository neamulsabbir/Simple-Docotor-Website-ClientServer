import React from "react";
import icon4 from "../../../../Images/icon/icon4.png";
import icon5 from "../../../../Images/icon/icon5.png";
import icon6 from "../../../../Images/icon/icon6.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: icon4,
      name: "Eye Care",
      details:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      bgColor: "bg-stone-100",
    },
    {
      _id: 2,
      img: icon5,
      name: "Dental Care",
      details:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      bgColor: "bg-sky-100",
    },
    {
      _id: 3,
      img: icon6,
      name: "Alergic Issue",
      details:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      bgColor: "bg-stone-100",
    },
  ];

  return (
    <div className="bg-blue-50">
      <div className="w-10/12 mx-auto py-16">
        <h1 className="text-blue-800 font-semibold">Our Services</h1>
        <h1 className="text-4xl font-bold mb-10">
          High Quality Services for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between">
          {
            services.map(service => <Service key={service._id} service={service}></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
