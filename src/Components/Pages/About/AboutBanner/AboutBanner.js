import React from 'react';
import img from '../../../../Images/about.png'

const AboutBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row w-10/12 mx-auto bg-cyan-700 items-center'>
            <div className='lg:w-1/2 text-center h-full py-10 lg:py-0'>
                <h1 className='text-3xl font-bold text-white '>Achieve your goals <br/>About Lifeline Care</h1>
            </div>
            <img className='w-full lg:w-1/2' src={img} alt=""/>
        </div>
    );
};

export default AboutBanner;