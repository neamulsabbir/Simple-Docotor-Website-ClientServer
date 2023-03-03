import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import docotr1 from '../../../../Images/doctors/doctor1.jpg'
import docotr2 from '../../../../Images/doctors/doctor2.jpg'
import docotr3 from '../../../../Images/doctors/docotr3.jpg'



const Swipers = () => {
    const doctors = [
        {
            _id: 1,
            img: docotr3,
            name: "Dr. Mary Joe",
            tittle: "Neorology",
            bgColor:'bg-sky-50'
        },
        {
            _id: 2,
            img: docotr1,
            name: "Dr. Hessy Hanna",
            tittle: "Cardiology",
            bgColor:'bg-cyan-50'
        },
        {
            _id: 3,
            img: docotr2,
            name: "Dr. Thomas Jack",
            tittle: "Pathology",
            bgColor:'bg-red-50'
        },
        {
            _id: 4,
            img: docotr3,
            name: "Dr. Mary Joe",
            tittle: "Neorology",
            bgColor:'bg-orange-50'
        }
    ]
    return (
        <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            doctors.map(doctor => {
                <SwiperSlide>
                    <img src={doctor.img} alt=""/>
                </SwiperSlide>
            })
        }
        
       
      </Swiper>
        </div>
    );
};

export default Swipers;