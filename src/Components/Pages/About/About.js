import React from "react";
import Footer from "../../ShareFile/Footer/Footer";
import AboutBanner from "./AboutBanner/AboutBanner";
import Chat from "./Chat/Chat";
import LifeStyle from "./LifeStyle/LifeStyle";

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <Chat></Chat>
      <LifeStyle></LifeStyle>
      <Footer></Footer>
    </div>
  );
};

export default About;
