import React from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import AboutTech from './AboutTech/AboutTech';
import Banner from './Banner/Banner';
import ContactField from './ContactField/ContactField';
import Docotors from './Docotors/Docotors';
import Services from './Services/Services';
import ShortStory from './ShortStory/ShortStory';
import Supports from './Supports/Supports';
import Swipers from './Swipers/Swipers';
import Testimonials from './Testimonials/Testimonials';
import Trusty from './Trusty/Trusty';

const Home = () => {
    return (
        <div>
            <Swipers></Swipers>
            <Banner></Banner>
            <Supports></Supports>
            <ShortStory></ShortStory>
            <Services></Services>
            <AboutTech></AboutTech>
            <Docotors></Docotors>
            <Trusty></Trusty>
            <Testimonials></Testimonials>
            <ContactField></ContactField>
            <Footer></Footer>
        </div>
    );
};

export default Home;