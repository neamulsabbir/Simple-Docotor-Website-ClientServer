import React from 'react';
import tech from '../../../../Images/img3.png'

const AboutTech = () => {
    return (
        <div className='flex flex-col lg:flex-row w-10/12 mx-auto items-center my-32'>
            <img className='w-full md:w-7/12' src={tech} alt=""/>
            <div className='mt-10 lg:m-0 lg:ml-10'>
                <p className='text-blue-700 font-semibold'>Who we are -----</p>
                <h1 className='text-3xl font-bold'>We Have Advanced <br/> Technologies</h1>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
        </div>
    );
};

export default AboutTech;