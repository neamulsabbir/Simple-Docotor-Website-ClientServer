import React from 'react';
import chat from '../../../../Images/chat.png'

const Chat = () => {
    return (
        <div className='bg-gray-100  py-10 my-16 md:my-32'>
            <div className='w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center'>
                <img className='w-16' src={chat} alt=""/>
                <div className='text-xl font-medium ml-10'>
                    <h1>Have some feedback for us? Use our feedback process to let us know. <br/>In the case of an emergency, call 000</h1>
                </div>
            </div>
        </div>
    );
};

export default Chat;