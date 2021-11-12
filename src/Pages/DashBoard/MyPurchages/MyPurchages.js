import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const MyPurchages = () => {
    const {user}=useAuth()
    const [myPurchages, setMyPurchages] = useState([])
    useEffect(() => {
      fetch(`http://localhost:5000/mypurchages?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyPurchages(data))
    },[])
    return (
        <div>
            <h2>Purchage Items {myPurchages.length}</h2>
        
        <TableContainer component={Paper} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Customer Email</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Order ID</TableCell>
            <TableCell align="right">Order Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {myPurchages.map(row => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border:1 } }}
            >
              <TableCell component="th" scope="row">
              <img width='100px' src={row.pr?.img}/>
              </TableCell>
              <TableCell align="right">{row.pr?.titile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row._id}</TableCell>
              <TableCell align="right">{row.pr?.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyPurchages;