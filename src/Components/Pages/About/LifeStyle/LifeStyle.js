import React from 'react';
import img from '../../../../Images/lifestyle.jpg'
import AppoinmentBtn from '../../../ShareFile/AppoinmentBtn/AppoinmentBtn';

const LifeStyle = () => {
    return (
        <div className='w-10/12 mx-auto flex flex-col-reverse items-center lg:flex-row my-16 md:my-32'>
            <img className='border rounded-r-full lg:w-1/2 mt-5 lg:mt-0' src={img} alt=""/>
            <div className='lg:w-1/2 text-center lg:text-left lg:ml-10'>
                <h1 className='text-cyan-700 font-bold text-2xl'>Building a Centre of Excellence for a Healthy Lifestyle</h1>
                <h3 className='text-lg font-semibold py-5'>Fitwise Physiotherapy is a multi-disciplinary health centre of excellence in Women’s, Men’s and Pelvic Health. We’ve been around for a long time and we  love working with people and giving them the right support to help them achieve their goals.</h3>
                <p className='mb-5'>We’re here to listen – to hear your story – and then work with you in a collaborative way. We want to help you to achieve your goals, to maximise your lifestyle choices and to improve your overall health and wellbeing. We don’t just work with where you are at, we want to empower you to do more now and into the future!</p>
                <AppoinmentBtn></AppoinmentBtn>
            </div>
        </div>
    );
};

export default LifeStyle;