import React from 'react';
import Footer from '../../ShareFile/Footer/Footer';
import Chat from '../About/Chat/Chat';
import GoogleMap from './GoogleMap/GoogleMap';
import OnlineForm from './OnlineForm/OnlineForm';

const Contact = () => {
    return (
        <div>
            <GoogleMap></GoogleMap>
            <OnlineForm></OnlineForm>
            <Chat></Chat>
            <Footer></Footer>
        </div>
    );
};

export default Contact;