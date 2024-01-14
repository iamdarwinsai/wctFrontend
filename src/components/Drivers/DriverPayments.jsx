import React, { useState, useEffect } from "react";
import Header from '../../layouts/Header'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { MenuItem, Select } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


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
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CloseIcon from "@mui/icons-material/Close";
import { fetchUpComingRides } from "../../DummyData/DriverData";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from 'react-router-dom';
import DriverSidebar from '../../layouts/DriverSidebar'



function DriverPayments() {
  const [payments, setPayments]=useState([]);
  const navigate = useNavigate();
  const [newPayemnt,setNewpayment]=useState({
    "paymentID": "",
    "amount": 0,
    "driverID": "",
    "paymentDate": "",
    "createdAt": "",
    "updatedAt": ""
  });

  const paymentColumns = [
    {
      field: "view",
      headerName: "View",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      renderCell: (params) => (
        <IconButton color="primary" onClick={() => handleEditRow(params.id)}>
          <RemoveRedEyeIcon />
        </IconButton>
      ),
    },
    { field: "paymentID", headerName: "paymentID", width: 150 },
    { field: "amount", headerName: "amount", width: 150 },
    { field: "driverID", headerName: "driverID",width: 150 },
    { field: "paymentDate", headerName: "paymentDate",width: 150 },
    { field: "createdAt", headerName: "createdAt",width: 200 },
    { field: "updatedAt", headerName: "updatedAt",width: 200 },
    
   
    
  ];


    useEffect(() => {
      const data = [
        {
          "paymentID": "ea0cc057-72f3-4e1d-a5e3-bcfa02a57be9",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:32:41.068Z",
          "createdAt": "2024-01-10T12:32:41.069Z",
          "updatedAt": "2024-01-10T12:32:41.069Z"
        },
        {
          "paymentID": "6b0d092f-ba20-4421-aa2c-dde05e074f23",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:54:06.841Z",
          "createdAt": "2024-01-10T12:54:06.842Z",
          "updatedAt": "2024-01-10T12:54:06.842Z"
        },
        {
          "paymentID": "d17cb418-7264-4b09-91c5-c4c6b1bbf196",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:55:17.375Z",
          "createdAt": "2024-01-10T12:55:17.376Z",
          "updatedAt": "2024-01-10T12:55:17.376Z"
        },
        {
          "paymentID": "fa078b07-865d-456a-965a-a54f5fdf850b",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:55:53.311Z",
          "createdAt": "2024-01-10T12:55:53.312Z",
          "updatedAt": "2024-01-10T12:55:53.312Z"
        },
        {
          "paymentID": "032d2748-2e9c-435a-a47b-d45acc521114",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:58:20.966Z",
          "createdAt": "2024-01-10T12:58:20.967Z",
          "updatedAt": "2024-01-10T12:58:20.967Z"
        },
        {
          "paymentID": "284fea0b-690c-49be-9458-e6fa224be431",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T13:03:21.083Z",
          "createdAt": "2024-01-10T13:03:21.084Z",
          "updatedAt": "2024-01-10T13:03:21.084Z"
        },
        {
          "paymentID": "1f774667-674a-4ff8-b834-b933e0cc7a52",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:53:38.729Z",
          "createdAt": "2024-01-10T13:03:35.035Z",
          "updatedAt": "2024-01-10T13:03:35.035Z"
        },
        {
          "paymentID": "e42d6a2a-236d-4da1-9762-f2896342bee9",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:53:38.729Z",
          "createdAt": "2024-01-10T13:03:47.312Z",
          "updatedAt": "2024-01-10T13:03:47.312Z"
        },
        {
          "paymentID": "ff9ed859-11c7-4c24-9deb-138224773162",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:53:38.729Z",
          "createdAt": "2024-01-10T13:03:50.409Z",
          "updatedAt": "2024-01-10T13:03:50.409Z"
        },
        {
          "paymentID": "c874bbf1-56bd-4b7c-9933-24f2876f7d32",
          "amount": 1320,
          "driverID": "55c67a0b-414b-4ca2-9519-3f63adba36d4",
          "paymentDate": "2024-01-10T12:53:38.729Z",
          "createdAt": "2024-01-10T13:04:44.715Z",
          "updatedAt": "2024-01-10T13:04:44.715Z"
        },
        {
          "paymentID": "25641499-73a9-44ef-bb3d-ad4cef78fcbf",
          "amount": 760,
          "driverID": "47ff94ea-002e-4e6c-89f3-d41cfdc02ad2",
          "paymentDate": "2024-01-10T13:42:30.305Z",
          "createdAt": "2024-01-10T13:42:30.306Z",
          "updatedAt": "2024-01-10T13:42:30.306Z"
        },
        {
          "paymentID": "462e222f-e1a8-4382-9992-d4561335c0e2",
          "amount": 950,
          "driverID": "47ff94ea-002e-4e6c-89f3-d41cfdc02ad2",
          "paymentDate": "2024-01-10T13:42:35.084Z",
          "createdAt": "2024-01-10T13:42:35.086Z",
          "updatedAt": "2024-01-10T13:42:35.086Z"
        },
        {
          "paymentID": "888ac95b-c3da-491e-8eaf-d089f07a94d4",
          "amount": 195,
          "driverID": "47ff94ea-002e-4e6c-89f3-d41cfdc02ad2",
          "paymentDate": "2024-01-10T13:42:39.507Z",
          "createdAt": "2024-01-10T13:42:39.508Z",
          "updatedAt": "2024-01-10T13:42:39.508Z"
        },
        {
          "paymentID": "3272364a-d0ca-4cfa-b747-8f24b9c42052",
          "amount": 752,
          "driverID": "47ff94ea-002e-4e6c-89f3-d41cfdc02ad2",
          "paymentDate": "2024-01-10T13:46:39.445Z",
          "createdAt": "2024-01-10T13:46:39.447Z",
          "updatedAt": "2024-01-10T13:46:39.447Z"
        },
        {
          "paymentID": "9370a7bb-7455-4287-9f93-7f1b7112d0d1",
          "amount": 251,
          "driverID": "8724eaf2-11a8-456b-a739-90d5e0b93b67",
          "paymentDate": "2024-01-10T13:47:14.289Z",
          "createdAt": "2024-01-10T13:47:14.290Z",
          "updatedAt": "2024-01-10T13:47:14.290Z"
        },
        {
          "paymentID": "e99e08e7-41ee-4647-ba62-d593c54f1dc9",
          "amount": 908,
          "driverID": "8724eaf2-11a8-456b-a739-90d5e0b93b67",
          "paymentDate": "2024-01-10T13:47:17.961Z",
          "createdAt": "2024-01-10T13:47:17.962Z",
          "updatedAt": "2024-01-10T13:47:17.962Z"
        },
        {
          "paymentID": "65c797ef-3c30-4c90-a5b6-176086f07767",
          "amount": 543,
          "driverID": "8724eaf2-11a8-456b-a739-90d5e0b93b67",
          "paymentDate": "2024-01-10T13:47:20.775Z",
          "createdAt": "2024-01-10T13:47:20.776Z",
          "updatedAt": "2024-01-10T13:47:20.776Z"
        },
        {
          "paymentID": "8c750cd1-9180-4ad7-8d37-72d77459d2b7",
          "amount": 678,
          "driverID": "8724eaf2-11a8-456b-a739-90d5e0b93b67",
          "paymentDate": "2024-01-10T13:47:24.208Z",
          "createdAt": "2024-01-10T13:47:24.209Z",
          "updatedAt": "2024-01-10T13:47:24.209Z"
        }
      ];
      
    console.log(data);
    setPayments(data);
  },[]);

  const [isEditMode,setIsEditMode]=useState(false);
  const handleAddPayment=()=> {
    setIsEditMode(false);
    setNewpayment({
      "paymentID": "",
    "amount": null,
    "driverID": "",
    "paymentDate": "",
    "createdAt": "",
    "updatedAt": ""
    });
    functionopenpopup();
  }
  const functionopenpopup = () => {
    openchange(true);
  };

  const closepopup = () => {
    openchange(false);


  };
  const [open, openchange] = useState(false);
  const handleChange = (event) => {
    console.log(event);
    setNewpayment({ ...newPayemnt, [event.target.name]: event.target.value });
    console.log(newPayemnt);
  };
  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(newPayemnt);
    closepopup();
  };
  const handleEditRow = (id) => {
    // Implement your edit logic here
    setIsEditMode(true);
    const pays=payments.filter((pay) => pay.paymentID === id)[0];
    if(pays===null) 
    {
      alert("Id is not found");
    }
    console.log(pays);
    setNewpayment({
      "paymentID": pays.paymentID,
      "amount": pays.amount,
      "driverID": pays.driverID,
      "paymentDate": pays.paymentDate,
      "createdAt": pays.createdAt,
      "updatedAt": pays.updatedAt
    });
    functionopenpopup();
    console.log(`Edit row with ID ${pays}`);
   
  };


  return (
    <>
      <Box display={'flex'}>
        <DriverSidebar />
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant="h3" sx={{marginTop: '70px' ,color:'#004080'}}>
              Drivers Payments
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
                Payement Details{" "}
                <IconButton onClick={closepopup} style={{ float: "right" }}>
                  <CloseIcon color="primary"></CloseIcon>
                </IconButton>{" "}
              </DialogTitle>
              <DialogContent>
                <Stack spacing={2} margin={2}>
              
            

                  <TextField
                    label="paymentID"
                    name="paymentID"
                    value={newPayemnt.paymentID}
                    onChange={(event)=>handleChange(event)}
                    disabled={isEditMode}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "black",
                      },
                    }}
                  />
                  <TextField
                    label="amount"
                    name="amount"
                    value={newPayemnt.amount}
                    disabled={isEditMode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "black",
                      },
                    }}
                  />
                  <TextField
                    label="driverID"
                    name="driverID"
                    value={newPayemnt.driverID}
                    disabled={isEditMode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "black",
                      },
                    }}
                  />
                  <TextField
                    label="createdAt"
                    name="createdAt"
                    value={newPayemnt.createdAt}
                    disabled={isEditMode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "black",
                      },
                    }}
                  />
                  <TextField
                    label="updatedAt"
                    name="updatedAt"
                    value={newPayemnt.updatedAt}
                    disabled={isEditMode}
                    onChange={handleChange}
                    sx={{
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "black",
                      },
                    }}
                  />
                  
                
                  <Button color="primary" variant="contained" onClick={(event) => handleSubmit(event)}>
                    close
                  </Button>
                </Stack>
              </DialogContent>
              <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                        <Button onClick={closepopup} color="error" variant="contained">Close</Button> */}
              </DialogActions>
            </Dialog>
          </div>


          
          <div style={{ height: "80%", width: "100%", marginBottom: '16px' }}>
            <Container>
              <Toolbar />
            

              <Paper component={Box} width={1} height={700}>
                <DataGrid
                  rows={payments}
                  columns={paymentColumns}
                  pageSize={5}
                  getRowId={(payments) => payments.paymentID}
                  // checkboxSelection
                  // onEditCellChangeCommitted={handleEditCellChange}
                  components={{
                    Toolbar: GridToolbar,
                  }}
                />
              </Paper>
            </Container>
          </div>
        </Box>
      </Box>
    </>
   
  )
}

export default DriverPayments




