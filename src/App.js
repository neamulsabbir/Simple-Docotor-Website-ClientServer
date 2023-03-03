import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Appoinment from "./Components/Pages/Appoinment/Appoinment";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Header from "./Components/ShareFile/Header/Header";
import NotFound from "./Components/ShareFile/NotFound/NotFound";
import MyBookings from "./Components/Pages/MyBookings/MyBookings";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AdminPanel from "./Components/Pages/AdminPanel/AdminPanel";
import BookingsData from "./Components/Pages/AdminPanel/BookingsData/BookingsData";
import Users from "./Components/Pages/AdminPanel/Users/Users";
import AdminPrivateRoute from "./Components/AdminPrivateRoute/AdminPrivateRoute";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact/Contact";


function App() {
  return (
    <div>
      <Toaster />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appoinment" element={<Appoinment></Appoinment>}></Route>
        <Route path="/myBookings/user" element={<PrivateRoute><MyBookings></MyBookings></PrivateRoute>}></Route>
        <Route path="/adminPanel" element={<AdminPrivateRoute><AdminPanel></AdminPanel></AdminPrivateRoute>}>
          <Route path="/adminPanel/bookingsData" element={<AdminPrivateRoute><BookingsData></BookingsData></AdminPrivateRoute>}></Route>
          <Route path="/adminPanel/users" element={<AdminPrivateRoute><Users></Users></AdminPrivateRoute>}></Route>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
