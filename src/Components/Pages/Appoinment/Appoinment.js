import { useState } from "react";
import Footer from "../../ShareFile/Footer/Footer";
import Header from "../../ShareFile/Header/Header";
import AppoinmentDate from "./AppoinmentDate/AppoinmentDate";
import AppoinmentServices from "./AppoinmentServices/AppoinmentServices";

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppoinmentDate>
      <AppoinmentServices selectedDate={selectedDate}></AppoinmentServices>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
