import React, { useState, useEffect } from "react";
import Header from '../../layouts/Header'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { Container, Paper, Box } from "@mui/material";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Stack,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close";
import { fetchUpComingRides } from "../../DummyData/DriverData";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../layouts/AdminSidebar';
import axios from 'axios';
import AuthUser from "../AuthUser";


function DriverProfiles() {
  const navigate = useNavigate();
  const [driverDetails,setDriverDetails]=useState([]);
  const {http,getToken} =AuthUser();


  const [newdriver,setNewdriver]= useState({
    driverID:"",
    driverFirstName: "",
    driverLastName:"",
    email:"",
    password:"",
    driverAddress:"",
    driverPhoneNumber1:"",
    driverPhoneNumber2:"",
    vehicleColor:"",
    vehicleMake:"",   
    vehicleModel:"",
    vehicleLicense:"",
    driverLicense:"",
    driverSSN:"",
  });
  const driverColumns = [
    { field: "driverID", headerName: "driverID", width: 100 },
    { field: "driverFirstName", headerName: "driverFirstName", width: 150 },
    { field: "driverLastName", headerName: "driverLastName" },
    { field: "email", headerName: "email" },
    { field: "password", headerName: "password" },
    { field: "driverAddress", headerName: "driverAddress" },
    { field: "driverPhoneNumber1", headerName: "driverPhoneNumber1" },
    { field: "driverPhoneNumber2", headerName: "driverPhoneNumber2" },
    { field: "vehicleColor", headerName: "vehicleColor" },
    { field: "vehicleMake", headerName: "vehicleMake" },
    { field: "vehicleModel", headerName: "vehicleModel" },
    { field: "vehicleLicense", headerName: "vehicleLicense" },
    { field: "driverLicense", headerName: "driverLicense" },
    { field: "driverSSN", headerName: "driverSSN" },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handleEditRow(params.id)}>
          <EditIcon />
        </IconButton>
      ),
    },
    // {
    //   field: "Driver",
    //   headerName: "Assign Driver",
    //   minWidth: 120,
    //   renderCell: (params) => (
    //     <Select
    //       value={params.value}
    //       onChange={(e) => handleStatusChange(params.id, e.target.value)}
    //     >
    //       <MenuItem value="">None </MenuItem>

    //       <MenuItem value="null">None </MenuItem>
    //       <MenuItem value="Nagaajay">Nagaajay</MenuItem>
    //       <MenuItem value="Darwin">Darwin</MenuItem>
    //       <MenuItem value="Zak">Zak</MenuItem>
    //     </Select>
    //   ),
    // },
    
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <IconButton
          color="secondary"
          onClick={() => {
            console.log(params);
            handleDeleteRow(params.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  

  useEffect(() => {
    console.log("token",getToken());
    axios({
      baseURL: "http://localhost:8000/api/v1",
      url: "/admin/drivers",
      method: "get",
      headers:  {
        Authorization: getToken()
      },
      timeout: 2000,
    })
      .then((response) => {
        console.log("response.data",response.data.data);
        console.log("message",response.data.message);
        setDriverDetails(response.data.data);
        //setRidesRows(response.data.data);
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          console.log("Request timed out");
        } else {
          console.log(error.message);
        }
      });
  //   const data = [{
  //     driverID:"25457",
  //     driverFirstName: "JOEY",
  //     driverLastName:"TRIBBIANI",
  //     email:"joey@iamjoey.com",
  //     password:"Joey@143",
  //     driverAddress:"Earth PLanet",
  //     driverPhoneNumber1:"989098909890",
  //     driverPhoneNumber2:"09813209813290231",
  //     vehicleColor:"Black",
  //     vehicleMake:"BWM",   
  //     vehicleModel:"X7",
  //     vehicleLicense:"AXAX098989",
  //     driverLicense:"ASSASA9889",
  //     driverSSN:"ASASLP0909090",
  //   },
  //   {
  //     driverID:"25456",
  //     driverFirstName: "JOEY",
  //     driverLastName:"TRIBBIANI",
  //     email:"joey@iamjoey.com",
  //     password:"Joey@143",
  //     driverAddress:"Earth PLanet",
  //     driverPhoneNumber1:"989098909890",
  //     driverPhoneNumber2:"09813209813290231",
  //     vehicleColor:"Black",
  //     vehicleMake:"BWM",   
  //     vehicleModel:"X7",
  //     vehicleLicense:"AXAX098989",
  //     driverLicense:"ASSASA9889",
  //     driverSSN:"ASASLP0909090",
  //   },
  //   {
  //     driverID:"25458",
  //     driverFirstName: "JOEY",
  //     driverLastName:"TRIBBIANI",
  //     email:"joey@iamjoey.com",
  //     password:"Joey@143",
  //     driverAddress:"Earth PLanet",
  //     driverPhoneNumber1:"989098909890",
  //     driverPhoneNumber2:"09813209813290231",
  //     vehicleColor:"Black",
  //     vehicleMake:"BWM",   
  //     vehicleModel:"X7",
  //     vehicleLicense:"AXAX098989",
  //     driverLicense:"ASSASA9889",
  //     driverSSN:"ASASLP0909090",
  //   },
  //   {
  //     driverID:"25451",
  //     driverFirstName: "JOEY",
  //     driverLastName:"TRIBBIANI",
  //     email:"joey@iamjoey.com",
  //     password:"Joey@143",
  //     driverAddress:"Earth PLanet",
  //     driverPhoneNumber1:"989098909890",
  //     driverPhoneNumber2:"09813209813290231",
  //     vehicleColor:"Black",
  //     vehicleMake:"BWM",   
  //     vehicleModel:"X7",
  //     vehicleLicense:"AXAX098989",
  //     driverLicense:"ASSASA9889",
  //     driverSSN:"ASASLP0909090",
  //   }
  // ];
    //console.log(data);
    //setDriverDetails(data);
  }, []);
  const [isEditMode,setIsEditMode]=useState(false);
  const handleDeleteRow = (id) => {
    console.log(id);
    if (driverDetails.filter((driver) => driver.driverID === id)) {
      const updatedRows = driverDetails.filter((driver) => driver.driverID !== id);
      setDriverDetails(updatedRows);
    } else {
      alert("ID is already deleted...!");
    }
  };

  const handleAddDriver=()=> {
    setIsEditMode(false);
    setNewdriver({
      driverID:"",
      driverFirstName: "",
      driverLastName:"",
      email:"",
      password:"",
      driverAddress:"",
      driverPhoneNumber1:"",
      driverPhoneNumber2:"",
      vehicleColor:"",
      vehicleMake:"",   
      vehicleModel:"",
      vehicleLicense:"",
      driverLicense:"",
      driverSSN:"",
    });
    functionopenpopup();
  }
  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
    setNewdriver({
      driverID:"",
      driverFirstName: "",
      driverLastName:"",
      email:"",
      password:"",
      driverAddress:"",
      driverPhoneNumber1:"",
      driverPhoneNumber2:"",
      vehicleColor:"",
      vehicleMake:"",   
      vehicleModel:"",
      vehicleLicense:"",
      driverLicense:"",
      driverSSN:"",
    });

  };
  const handleChange = (event) => {
    console.log(event);
    setNewdriver({ ...newdriver, [event.target.name]: event.target.value });
    //console.log(newdriver);
    //setValues(prevState => ({ ...values, [name]: value }));

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("newdriver",newdriver);

    axios({
      baseURL: "http://localhost:8000/api/v1",
      url: "/admin/addDriver",
      method: "post",
      data: {
        driverFirstName: newdriver.driverFirstName,
        driverLastName: newdriver.driverLastName,
        email: newdriver.email,
        password: newdriver.password,
        driverAddress: newdriver.driverAddress,
        driverPhoneNumber1: newdriver.driverPhoneNumber1,
        driverPhoneNumber2: newdriver.driverPhoneNumber2,
        vehicleColor: newdriver.vehicleColor,
        vehicleMake: newdriver.vehicleMake,
        vehicleModel: newdriver.vehicleModel,
        vehicleLicense: newdriver.vehicleLicense,
        driverLicense: newdriver.driverLicense,
        driverSSN: newdriver.driverSSN
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken()
      },
    })
      .then((response) => {
        console.log(response);
        console.log("response.data", response.data.data);
        console.log("message", response.data.message);
        // setDriverDetails(response.data.data);
        // setRidesRows(response.data.data);
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          console.log("Request timed out");
        } else {
          console.log("error", error);
        }
      });
    






    closepopup();
  };
  const handleEditRow = (id) => {
    // Implement your edit logic here
    setIsEditMode(true);
    const editDriver=driverDetails.filter((driver) => driver.driverID === id)[0];
    if(editDriver===null) 
    {
      alert("Id is not found");
    }
    console.log(editDriver);
    setNewdriver({
      driverID:editDriver.driverID,
      driverFirstName: editDriver.driverFirstName,
      driverLastName:editDriver.driverLastName,
      email:editDriver.email,
      password:editDriver.password,
      driverAddress:editDriver.driverAddress,
      driverPhoneNumber1:editDriver.driverPhoneNumber1,
      driverPhoneNumber2:editDriver.driverPhoneNumber2,
      vehicleColor:editDriver.vehicleColor,
      vehicleMake:editDriver.vehicleMake,   
      vehicleModel:editDriver.vehicleModel,
      vehicleLicense:editDriver.vehicleLicense,
      driverLicense:editDriver.driverLicense,
      driverSSN:editDriver.driverSSN,
    });
    functionopenpopup();
    console.log(`Edit row with ID ${editDriver}`);
   
  };

  return (
    <>
    <AdminSidebar />
    <div>
    <div>DriversDetail</div>
        <Dialog
          // fullScreen
          open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Driver Details{" "}
            <IconButton onClick={closepopup} style={{ float: "right" }}>
              <CloseIcon color="primary"></CloseIcon>
            </IconButton>{" "}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
            {/* <TextField
                label="Driver LastName"
                name="Driver LastName"
                // value={newdriver.driverLastName}
                // onChange={handleChange}
              /> */}
              <TextField
                label="Driver ID"
                name="driverID"
                value={newdriver.driverID}
                onChange={(event)=>handleChange(event)}
                 disabled={true}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
              />
              <TextField
                label="Driver FirstName"
                name="driverFirstName"
                value={newdriver.driverFirstName}
               onChange={handleChange}
              />
              <TextField
                label="Driver LastName"
                name="driverLastName"
                value={newdriver.driverLastName}
                onChange={handleChange}
              />
              <TextField
                label="Driver Email"
                name="email"
                value={newdriver.email}
                onChange={handleChange}
              />
              <TextField
                label="Driver password"
                name="password"
                value={newdriver.password}
                onChange={handleChange}
              />
              <TextField
                label="Driver Address"
                name="driverAddress"
                value={newdriver.driverAddress}
                onChange={handleChange}
              />
              <TextField
                label="Driver Phone number1"
                name="driverPhoneNumber1"
                value={newdriver.driverPhoneNumber1}
                onChange={handleChange}
              />
              <TextField
                label="Driver Phone number2"
                name="driverPhoneNumber2"
                value={newdriver.driverPhoneNumber2}
                onChange={handleChange}
              />
              <TextField
                label="Driver vehicle Color"
                name="vehicleColor"
                value={newdriver.vehicleColor}
                onChange={handleChange}
              />
              <TextField
                label="Driver vehicle Make"
                name="vehicleMake"
                value={newdriver.vehicleMake}
                onChange={handleChange}
              />
              <TextField
                label="Driver vehicle Model"
                name="vehicleModel"
                value={newdriver.vehicleModel}
                onChange={handleChange}
              />
              <TextField
                label="Driver vehicle License"
                name="vehicleLicense"
                value={newdriver.vehicleLicense}
                onChange={handleChange}
              />
               <TextField
                label="Driver vehicle License"
                name="driverLicense"
                value={newdriver.driverLicense}
                onChange={handleChange}
              />
              <TextField
                label="Driver SSN"
                name="driverSSN"
                value={newdriver.driverSSN}
                onChange={handleChange}
              />
             
              <Button color="primary" variant="contained" onClick={(event) => handleSubmit(event)}>
                Submit
              </Button>
            </Stack>
          </DialogContent>
          <DialogActions>
            {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
          </DialogActions>
        </Dialog>
      </div>


       
        <div style={{ height: "80%", width: "100%" }}>
        <Container>
          <Toolbar />
          <Box
            m={1}
            //margin
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            // sx={boxDefault}
          >
            <Button
              // onClick={functionopenpopup}
              onClick={(event) => handleAddDriver(event)}

              color="primary"
              variant="contained"
              sx={{ height: 40 }}
              startIcon={<AirlineSeatReclineNormalIcon />}
            >
              Add Driver
            </Button>
          </Box>

          <Paper component={Box} width={1} height={700}>
            <DataGrid
              rows={driverDetails}
              columns={driverColumns}
              pageSize={5}
              getRowId={(driverDetails) => driverDetails.driverID}
              // checkboxSelection
              // onEditCellChangeCommitted={handleEditCellChange}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </Paper>
        </Container>
      </div>
    </>
  )
}

export default DriverProfiles

