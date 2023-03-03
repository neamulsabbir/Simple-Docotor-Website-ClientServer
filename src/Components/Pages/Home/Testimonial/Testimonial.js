import React from 'react';

const Testimonial = ({rev}) => {
    return (
        <div className={`border-solid border-8 p-4 ${rev?.bgColor}`}>
          <p>{rev?.review}</p>
          <div className="flex items-center mt-5">
            <img className="rounded-full w-16 border-4 border-grey-200 p-1" src={rev?.img} alt="" />
            <h1 className="text-xl ml-6 font-semibold">{rev?.name}</h1>
          </div>
        </div>
    );
};

export default Testimonial;