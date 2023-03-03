import React from 'react';
import icon1 from "../../../../Images/icon/icon1.png";
import icon2 from "../../../../Images/icon/icon2.png";
import icon3 from "../../../../Images/icon/icon3.png";
import Support from '../Support/Support';

const Supports = () => {
  const supports = [
    {
      _id : 1,
      img: icon1,
      tittle: 'Specialised Service',
      details: 'Lorem Ipsum is simply dummy text of the pri'
    },
    {
      _id : 2,
      img: icon2,
      tittle: '24/7 Advanced Care',
      details: 'Lorem Ipsum is simply dummy text of the pri'
    },
    {
      _id : 3,
      img: icon3,
      tittle: 'Get Result Online',
      details: 'Lorem Ipsum is simply dummy text of the pri'
    },
  ]
    return (
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between  w-10/12 mx-auto my-16 lg:my-32">
          {
            supports.map(support => <Support key={support._id} support={support}></Support>)
          }
        
       
      </div>
    );
};

export default Supports;