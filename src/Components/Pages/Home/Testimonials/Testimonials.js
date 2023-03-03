import React from "react";
import test from "../../../../Images/testimonial/testi1.jpg";
import Testimonial from "../Testimonial/Testimonial";


const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            img: test,
            name: "NK Sabbir",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation.",
            bgColor: 'border-red-100'
        },
        {
            _id: 2,
            img: test,
            name: "Sarfaraz Sabbir",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation.",
            bgColor: 'border-amber-100' 
        },
        {
            _id: 3,
            img: test,
            name: "Neamul KS",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru exercitation.",
            bgColor: 'border-green-100' 
        }
    ]

  return (
    <div className="w-10/12 my-32 mx-auto">
      <p className="text-blue-800 font-semibold">Testimonial</p>
      <h1 className="text-3xl font-bold">What Our Clients Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {
          reviews.map(rev => <Testimonial key ={rev._id} rev={rev}></Testimonial>)
        }
      </div>
    </div>
  );
};

export default Testimonials;
