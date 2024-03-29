import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography,Box } from '@mui/material';
import DriverSidebar from '../../layouts/DriverSidebar'

const rideDetailsStyles = {
  paper: {
    padding: '16px',
    margin: '16px',
    background: '#e6f7ff',
  },
  header: {
    marginTop: '60px',
    marginBottom: '12px',
  },
};

const appStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16px',
  },
};

const typoStyle = {
  Typography: {
    fontWeight: 'bold',
    color: 'blue',
  }
}



const RideDetails = ({ ride }) => {
  return (
    <>
      <Paper elevation={3} style={rideDetailsStyles.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Ride ID</Typography> {ride.RideID}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Ride Status</Typography> {ride.Ride_Status}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Ride Date</Typography> {ride.Ride_Date}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Customer Name</Typography> {`${ride.Customer_FirstName} ${ride.Customer_LastName}`}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Phone Number</Typography> {ride.Phone_Number}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Transportation Type</Typography> {ride.Transportation_Type}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Pickup Time</Typography> {ride.Pick_Up_Time}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Arrival Time</Typography> {ride.Arrival_Time}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Estimated Distance</Typography> {ride.Estimated_Distance} miles</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Pickup Address</Typography> {ride.Pickup_Address}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Dropoff Address</Typography> {ride.Dropoff_Address}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Pickup Directions</Typography> {ride.Pickup_Directions || 'N/A'}</Grid>
          <Grid item xs={12} md={6} lg={4}><Typography style={typoStyle.Typography}>Driver</Typography> {ride.Driver || 'N/A'}</Grid>
        </Grid>
      </Paper>
    </>
  );
};

const DriverActiveRides = () => {
  const [myrides,setMyRides]=useState([]);
  const data =[
    {
      "RideID": "2462826",
      "Ride_Status": "PENDING_UPDATE",
      "Ride_Date": "4/21/2023",
      "Customer_FirstName": "ANTHONY",
      "Customer_LastName": "GREEN",
      "Phone_Number": "6127228150",
      "Transportation_Type": "NON_RIDESHARE_SEDAN",
      "Pick_Up_Time": "4/21/2023 07:15 AM (CST)",
      "Arrival_Time": "4/21/2023 07:45 AM (CST)",
      "Estimated_Distance": "51.2577",
      "Pickup_Address": "211 South 4th Street, Olivia, MN, USA",
      "Dropoff_Address": "11 North Minnesota Street, New Ulm, MN, USA",
      "Pickup_Directions": "",
      "Driver":"null"
    },
    {
      "RideID": "2483236",
      "Ride_Status": "UPCOMING",
      "Ride_Date": "4/22/2023",
      "Customer_FirstName": "MAGAN",
      "Customer_LastName": "BERRY",
      "Phone_Number": "3208945700",
      "Transportation_Type": "NON_RIDESHARE_SEDAN",
      "Pick_Up_Time": "4/22/2023 10:15 AM (CST)",
      "Arrival_Time": "4/22/2023 10:45 AM (CST)",
      "Estimated_Distance": "28.6124",
      "Pickup_Address": "324 West Weisel Street, Litchfield, MN 55355, USA",
      "Dropoff_Address": "1604 1st St S, Willmar, MN, USA",
      "Pickup_Directions": "-Appointment time: 11:00 AM \n-Pick up time: 10:15 AM \n-Return Time:  11:30 AM",
      "Driver":"null"
    }];
  return (
    <Box display={'flex'}>
      <DriverSidebar />
      <div style={appStyles.container}>
        <Typography variant="h3" sx={{marginTop:'60px',color:'#004080'}}>
          Drivers Active Rides
        </Typography>
        {data.map((ride, index) => (
          <RideDetails key={index} ride={ride} />
        ))}
      </div>
    </Box>
  );
};

export default DriverActiveRides;



