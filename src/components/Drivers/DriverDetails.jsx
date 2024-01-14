// import React, { useState, useEffect } from "react";
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Container, Box} from "@mui/material";

// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   IconButton,
//   Stack,
//   FormControl,
//   InputLabel,
// } from "@mui/material";

// function DriverDetails() {
//   const [isEditMode,setIsEditMode]=useState(false);

//   const [newdriver,setNewdriver]= useState({
//     driverID:"",
//     driverFirstName: "",
//     driverLastName:"",
//     email:"",
//     password:"",
//     driverAddress:"",
//     driverPhoneNumber1:"",
//     driverPhoneNumber2:"",
//     vehicleColor:"",
//     vehicleMake:"",   
//     vehicleModel:"",
//     vehicleLicense:"",
//     driverLicense:"",
//     driverSSN:"",
//   });
//   const handleChange = (event) => {
//     console.log(event);
//     setNewdriver({ ...newdriver, [event.target.name]: event.target.value });
//     console.log(newdriver);

//   };
//   return (
//     <>
//       <div>Drive Details</div>
//       <div>DriversDetail</div>
//       <Container>
//       <Stack spacing={2} margin={8}>
//       <TextField
//                 label="Driver ID"
//                 name="driverID"
//                 value={newdriver.driverID}
//                 onChange={(event)=>handleChange(event)}
//                  disabled={isEditMode}
//                 sx={{
//                   "& .MuiInputBase-input.Mui-disabled": {
//                     WebkitTextFillColor: "black",
//                   },
//                 }}
//               />
//               <TextField
//                 label="Driver FirstName"
//                 name="driverFirstName"
//                 value={newdriver.driverFirstName}
//                onChange={handleChange}
//               />
//               <TextField
//                 label="Driver LastName"
//                 name="driverLastName"
//                 value={newdriver.driverLastName}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver Email"
//                 name="email"
//                 value={newdriver.email}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver password"
//                 name="password"
//                 value={newdriver.password}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver Address"
//                 name="driverAddress"
//                 value={newdriver.driverAddress}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver Phone number1"
//                 name="driverPhoneNumber1"
//                 value={newdriver.driverPhoneNumber1}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver Phone number2"
//                 name="driverPhoneNumber2"
//                 value={newdriver.driverPhoneNumber2}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver vehicle Color"
//                 name="vehicleColor"
//                 value={newdriver.vehicleColor}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver vehicle Make"
//                 name="vehicleMake"
//                 value={newdriver.vehicleMake}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver vehicle Model"
//                 name="vehicleModel"
//                 value={newdriver.vehicleModel}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver vehicle License"
//                 name="vehicleLicense"
//                 value={newdriver.vehicleLicense}
//                 onChange={handleChange}
//               />
//               <TextField
//                 label="Driver SSN"
//                 name="driverSSN"
//                 value={newdriver.driverSSN}
//                 onChange={handleChange}
//               />
//               </Stack>
//               </Container>    
    
//     </>
  
//   )
// }

// export default DriverDetails

import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DriverSidebar from '../../layouts/DriverSidebar'

const driverDetailsStyles = {
  paper: {
    padding: '16px',
    margin: '16px',
    maxWidth: '800px',
    background: '#e6f7ff', // Light blue background
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    marginBottom: '12px',
    color: '#004080', // Dark blue text color
  },
  label: {
    fontWeight: 'bold',
    color: '#0066cc', // Medium blue text color
    width: '48%',
    marginBottom: '10px',
    textAlign:'start',
    fontSize:'20px',
  },
  value: {
    color: '#333', // Dark gray text color
    marginBottom: '10px',
    width: '48%',
    textAlign:'start',
  },
};

const DriverDetail = ({ driver }) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'}>
        <DriverSidebar />
        <Container maxWidth="sm">
          <Typography variant="h3" style={driverDetailsStyles.header}>
              Driver Details
          </Typography>
          <Paper elevation={3} style={driverDetailsStyles.paper}>
            <Box sx={{display:'flex', flexWrap:'wrap'}}>
              <Typography style={driverDetailsStyles.label}>Driver ID</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.driverID}</Typography>

              <Typography style={driverDetailsStyles.label}>Driver Name</Typography>
              <Typography style={driverDetailsStyles.value}>
                {`${driver.driverFirstName} ${driver.driverLastName}`}
              </Typography>

              <Typography style={driverDetailsStyles.label}>Email</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.email}</Typography>

              <Typography style={driverDetailsStyles.label}>Address</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.driverAddress}</Typography>

              <Typography style={driverDetailsStyles.label}>Phone Numbers</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.driverPhoneNumber1}, {driver.driverPhoneNumber2}</Typography>

              <Typography style={driverDetailsStyles.label}>Vehicle Color</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.vehicleColor}</Typography>

              <Typography style={driverDetailsStyles.label}>Vehicle Make/Model</Typography>
              <Typography style={driverDetailsStyles.value}>
                {`${driver.vehicleMake} ${driver.vehicleModel}`}
              </Typography>

              <Typography style={driverDetailsStyles.label}>Vehicle License</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.vehicleLicense}</Typography>

              <Typography style={driverDetailsStyles.label}>Driver License</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.driverLicense}</Typography>

              <Typography style={driverDetailsStyles.label}>SSN:</Typography>
              <Typography style={driverDetailsStyles.value}>{driver.driverSSN}</Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

const DriverDetails = () => {
  const data = [
    {
      driverID:"25457",
      driverFirstName: "JOEY",
      driverLastName:"TRIBBIANI",
      email:"joey@iamjoey.com",
      password:"Joey@143",
      driverAddress:"Earth PLanet",
      driverPhoneNumber1:"989098909890",
      driverPhoneNumber2:"09813209813290231",
      vehicleColor:"Black",
      vehicleMake:"BWM",   
      vehicleModel:"X7",
      vehicleLicense:"AXAX098989",
      driverLicense:"ASSASA9889",
      driverSSN:"ASASLP0909090",
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {data.map((driver, index) => (
        <DriverDetail key={index} driver={driver} />
      ))}
    </div>
  );
};

export default DriverDetails;

