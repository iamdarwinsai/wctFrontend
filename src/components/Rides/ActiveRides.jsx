import React, { useState, useEffect } from "react";
import Header from '../../layouts/Header'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
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
import AdminSidebar from '../../layouts/AdminSidebar'
import { Typography } from '@mui/material';
import AuthUser from "../AuthUser";
import axios from 'axios';



const ActiveRides = () => {
  const [ridesRows, setRidesRows] = useState([]);
  const {http,getToken} =AuthUser();


  const navigate = useNavigate();


  useEffect(() => {
    axios({
      baseURL: "http://localhost:8000/api/v1",
      url: "/admin/unAssignedRides",
      method: "get",
      headers: {
        Authorization: getToken()
      },
      timeout: 2000,
    })
      .then((response) => {
        console.log("response.data",response.data);
        setRidesRows(response.data.data);
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          console.log("Request timed out");
        } else {
          console.log(error.message);
        }
      });



    //const data = fetchUpComingRides();
    // const response = http.get("/admin/unAssignedRides",{
    //   headers: {
    //     'Authorization': getToken(),
    //     'Content-Type': ' application/json,*/*'
    //   }
    // });
    // console.log(response.data);
    
  }, []);
  // const handleDeleteRow = (id) => {
  //   console.log(id);
  //   const updatedRows = ridesRows.filter((ridesRows) => ridesRows.RideID !== id);
  //   setRidesRows(updatedRows);
  // };
  const handleDeleteRow = (id) => {
    console.log(id);
    if (ridesRows.filter((ride) => ride.RideID === id)) {
      const updatedRows = ridesRows.filter((ride) => ride.RideID !== id);
      setRidesRows(updatedRows);
    } else {
      alert("ID is already deleted...!");
    }
  };


  const handleEditCellChange = (params) => {
    const updatedRows = [...ridesRows];
    updatedRows[params.RideID - 1] = {
      ...updatedRows[params.id - 1],
      [params.field]: params.props.value,
    };
    setRidesRows(updatedRows);
  };
  const handleDriverChange = (id, newStatus) => {
    const updatedRows = ridesRows.map((ridesRows) =>
      ridesRows.RideID === id ? { ...ridesRows, Driver: newStatus } : ridesRows
    );
    console.log("Ride id: ", id);
    console.log("Driver Selected: ", newStatus);
    //handleDeleteRow(id);
    setRidesRows(updatedRows);
  };
  const handleRideStatusChange = (id, newStatus) => {
    const updatedRows = ridesRows.map((ridesRows) =>
      ridesRows.RideID === id ? { ...ridesRows, Ride_Status: newStatus } : ridesRows
    );
    console.log("Ride id: ", id);
    console.log("Status Selected: ", newStatus);
    setRidesRows(updatedRows);
  };

  const rideColumns = [
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
    {
      field: "Driver",
      headerName: "Assign Driver",
      minWidth: 120,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => handleDriverChange(params.id, e.target.value)}
        >
          {drivers && drivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
          {/* <MenuItem value="">None </MenuItem>

          <MenuItem value="null">None </MenuItem>
          <MenuItem value="Nagaajay">Nagaajay</MenuItem>
          <MenuItem value="Darwin">Darwin</MenuItem>
          <MenuItem value="Zak">Zak</MenuItem> */}
        </Select>
      ),
    },
    {
      field: "Ride_Status",
      headerName: "Assign Status",
      minWidth: 120,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) => handleRideStatusChange(params.id, e.target.value)}
        >
          {rideStatus && rideStatus.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      ),width: 200 
    },
    { field: "RideID", headerName: "Ride ID", width: 100 },
    // { field: "Ride_Status", headerName: "Ride Status", width: 150 },
    { field: "Ride_Date", headerName: "Ride Date" },
    { field: "Customer_FirstName", headerName: "First Name" },
    { field: "Customer_LastName", headerName: "Last Name" },
    { field: "Phone_Number", headerName: "Phone_Number" },
    { field: "Transportation_Type", headerName: "T Type" },
    { field: "Pick_Up_Time", headerName: "Pickup Time" },
    { field: "Arrival_Time", headerName: "Arrival Time" },
    { field: "Estimated_Distance", headerName: "Estimated Distance" },
    { field: "Pickup_Address", headerName: "Pickup Address" },
    { field: "Dropoff_Address", headerName: "Dropoff Address" },
    { field: "Pickup_Directions", headerName: "Pickup Directions" },
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

  const [open, openchange] = useState(false);
  const functionopenpopup = () => {
    openchange(true);
  };
  const closepopup = () => {
    openchange(false);
    setRide({
      RideID: "",
      Ride_Status: "",
      Ride_Date: "",
      Customer_FirstName: "",
      Customer_LastName: "",
      Phone_Number: "",
      Transportation_Type: "",
      Pick_Up_Time: "",
      Arrival_Time: "",
      Estimated_Distance: "",
      Pickup_Address: "",
      Dropoff_Address: "",
      Pickup_Directions: "",
      Driver: "",
    });
  };

  const [ride, setRide] = useState({
    RideID: "",
    Ride_Status: "",
    Ride_Date: "",
    Customer_FirstName: "",
    Customer_LastName: "",
    Phone_Number: "",
    Transportation_Type: "",
    Pick_Up_Time: "",
    Arrival_Time: "",
    Estimated_Distance: "",
    Pickup_Address: "",
    Dropoff_Address: "",
    Pickup_Directions: "",
    Driver: "",
  });
  //Driver change
  const handleChange = (event) => {

    if(event.target.value!==null) {
      axios({
        baseURL: "http://localhost:8000/api/v1",
        url: "/admin/assignRide",
        method: "post",
        headers:  {
          Authorization: getToken()
        },
        timeout: 2000,
      })
        .then((response) => {
          console.log("response.data",response);
          setRide({ ...ride, [event.target.name]: event.target.value });

          //setRidesRows(response.data.data);
        })
        .catch((error) => {
          if (error.code === "ECONNABORTED") {
            console.log("Request timed out");
          } else {
            console.log(error.message);
          }
        });
    }
  };
  const drivers = ['Nagaajay', 'Darwin', 'Zak'];
  const rideStatus = ['UPCOMING', 'PENDING_UPDATE', 'COMPLETED'];
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(ride);
    closepopup();
  };
  const handleAddRide=()=> {
    setIsEditMode(false);
    setRide({
      RideID: "",
      Ride_Status: "",
      Ride_Date: "",
      Customer_FirstName: "",
      Customer_LastName: "",
      Phone_Number: "",
      Transportation_Type: "",
      Pick_Up_Time: "",
      Arrival_Time: "",
      Estimated_Distance: "",
      Pickup_Address: "",
      Dropoff_Address: "",
      Pickup_Directions: "",
      Driver: "",
    });
    functionopenpopup();
  }
  const [isEditMode,setIsEditMode]=useState(false);
  const handleEditRow = (id) => {
    // Implement your edit logic here
    setIsEditMode(true);
    const editRide=ridesRows.filter((ride) => ride.RideID === id)[0];
    if(editRide===null) 
    {
      alert("Id is not found");
    }
    console.log(editRide);
    setRide({
      RideID: editRide.RideID,
      Ride_Status: editRide.Ride_Status,
      Ride_Date: editRide.Ride_Date,
      Customer_FirstName: editRide.Customer_FirstName,
      Customer_LastName: editRide.Customer_LastName,
      Phone_Number: editRide.Phone_Number,
      Transportation_Type: editRide.Transportation_Type,
      Pick_Up_Time: editRide.Pick_Up_Time,
      Arrival_Time: editRide.Arrival_Time,
      Estimated_Distance: editRide.Estimated_Distance,
      Pickup_Address: editRide.Pickup_Address,
      Dropoff_Address: editRide.Dropoff_Address,
      Pickup_Directions: editRide.Pickup_Directions,
      Driver: editRide.Driver,
    });
    functionopenpopup();
    console.log(`Edit row with ID ${editRide[0]}`);
   
  };

  return (
    <>
      <AdminSidebar />
      <Typography variant="h3" sx={{marginBottom:'12px',color:'#004080'}}>
        Active Rides
      </Typography>
      <div>
        
        <Dialog
          // fullScreen
          open={open}
          onClose={closepopup}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>
            Ride Details{" "}
            <IconButton onClick={closepopup} style={{ float: "right" }}>
              <CloseIcon color="primary"></CloseIcon>
            </IconButton>{" "}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} margin={2}>
              <TextField
                label="Ride ID"
                name="RideID"
                value={ride.RideID}
                onChange={handleChange}
                disabled={isEditMode}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "black",
                  },
                }}
              />
              <TextField
                label="Ride Status"
                name="Ride_Status"
                value={ride.Ride_Status}
                onChange={handleChange}
              />
              <TextField
                label="Ride Date"
                name="Ride_Date"
                value={ride.Ride_Date}
                onChange={handleChange}
              />
              <TextField
                label="Customer First Name"
                name="Customer_FirstName"
                value={ride.Customer_FirstName}
                onChange={handleChange}
              />
              <TextField
                label="Customer Last Name"
                name="Customer_LastName"
                value={ride.Customer_LastName}
                onChange={handleChange}
              />
              <TextField
                label="Phone Number"
                name="Phone_Number"
                value={ride.Phone_Number}
                onChange={handleChange}
              />
              <TextField
                label="Transportation Type"
                name="Transportation_Type"
                value={ride.Transportation_Type}
                onChange={handleChange}
              />
              <TextField
                label="Pick Up Time"
                name="Pick_Up_Time"
                value={ride.Pick_Up_Time}
                onChange={handleChange}
              />
              <TextField
                label="Arrival Time"
                name="Arrival_Time"
                value={ride.Arrival_Time}
                onChange={handleChange}
              />
              <TextField
                label="Estimated Distance"
                name="Estimated_Distance"
                value={ride.Estimated_Distance}
                onChange={handleChange}
              />
              <TextField
                label="Pickup Address"
                name="Pickup_Address"
                value={ride.Pickup_Address}
                onChange={handleChange}
              />
              <TextField
                label="Dropoff Address"
                name="Dropoff_Address"
                value={ride.Dropoff_Address}
                onChange={handleChange}
              />
              <TextField
                label="Pickup Directions"
                name="Pickup_Directions"
                value={ride.Pickup_Directions}
                onChange={handleChange}
              />
              
        <FormControl>
        <InputLabel>Driver</InputLabel>
        <Select
          name="Driver"
          value={ride.Driver}
          onChange={handleChange}
          label="Driver"
        >
          {drivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel>Ride Status</InputLabel>
        <Select
          name="Ride_Status"
          value={ride.Ride_Status}
          onChange={handleChange}
          label="Ride_Status"
        >
           {rideStatus && rideStatus.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
           
           
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
              onClick={(event) => handleAddRide(event)}

              color="primary"
              variant="contained"
              sx={{ height: 40 }}
              startIcon={<AirportShuttleIcon />}
            >
              Add Ride
            </Button>
          </Box>

          <Paper component={Box} width={1} height={700}>
           {ridesRows && <DataGrid
              rows={ridesRows}
              columns={rideColumns}
              pageSize={5}
              getRowId={(ridesRows) => ridesRows.RideID}
              // checkboxSelection
              onEditCellChangeCommitted={handleEditCellChange}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          }
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default ActiveRides;
