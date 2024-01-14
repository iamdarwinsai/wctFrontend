import React from "react";
// import Homepage from '../components/Homepage'
// import LoginForm from '../components/Login/LoginForm'
// import LoginPage from '../components/Login/LoginPage'
// import LoginPageMUI from '../components/Login/LoginPageMUI'
import Header from "../layouts/Header";
import AdminSidebar from "../layouts/AdminSidebar";
// import AdminSidebarusing from '../layouts/AdminSidebarusing'
// import Footer from '../layouts/Footer'
// import ParseCSVData from '../components/ParseCSVData'
import FileUpload from "../components/FileUpload";
// import Navbar from '../components/Rides/Navbar'
// import HeaderMusic from '../layouts/HeaderMusic'
import { Route, Routes } from "react-router-dom";
import AppLogin from "../components/AppLogin";
import ActiveRides from '../components/Rides/ActiveRides'
import AssignedRides from '../components/Rides/AssignedRides'
import CompletedRides from '../components/Rides/CompletedRides'
import DriverPayments from "../components/Drivers/DriverPayments";
import DriverDetails from "../components/Drivers/DriverDetails";
import DriverActiveRides from "../components/Drivers/DriverActiveRides";
import DriverProfiles from '../components/Rides/DriverProfiles';

import DriverPastRides from "../components/Drivers/DriverPastRides";
import Payments from '../components/Payment/Payments'


function Routings() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AppLogin />}></Route>
          <Route path="/Header" element={<Header />} />
          {/* <Route path="/RideFrom" element={<RideFrom />} /> */}
          <Route path="/FileUpload" element={<FileUpload />}></Route>
          {/* <Route path="/UpComingRides" element={<UpComingRides />}></Route> */}
          <Route path="/ActiveRides" element={<ActiveRides />}></Route>
          <Route path="/AssignedRides" element={<AssignedRides />}></Route>
          <Route path="/CompletedRides" element={<CompletedRides />}></Route>
          {/* <Route path="/DriversDetailAdmin" element={<DriversDetailAdmin />} ></Route> */}
          <Route path="/AdminSidebar" element={<AdminSidebar />}></Route>
          <Route path="/Payments" element={<Payments /> }></Route>
          <Route path="/DriverProfiles" element={<DriverProfiles />}></Route>

          {/* <Route path="/TableComponent" element={<TableComponent />}></Route> */}

          <Route path="/DriverDetails" element={<DriverDetails />}></Route>
          <Route path="/DriverPayments" element={<DriverPayments />}></Route>
          <Route path="/DriverPastRides" element={<DriverPastRides />}></Route>
          <Route path="/DriverActiveRides" element={<DriverActiveRides />}></Route>


        </Routes>
      </div>
    </>
  );
}

export default Routings;
