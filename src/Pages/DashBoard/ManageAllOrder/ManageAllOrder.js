import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageAllOrder = () => {
    const { user } = useAuth()
   
    const [allMyPurchages, setAllMyPurchages] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allmypurchages`)
            .then(res => res.json())
        .then(data=>setAllMyPurchages(data))
    }, [])
    

  
  


    const handleDelete=(id)=>{
      console.log(id);
      const confirmation = window.confirm("Are you sure to delete!!");
      if (confirmation) {
        fetch(`http://localhost:5000/DeleteAllOrder/${id}`,{
            method:"DELETE",
        })
       .then(res=>res.json())
            .then(data => {
                console.log(data)
              if (data.deletedCount) {
                   
                window.confirm('delete Successfully', id)
                    
               
                const remaining = allMyPurchages.filter(order => order._id !== id)
                setAllMyPurchages(remaining)
              }
              else{
                alert('Someting Wrong')
              }
            })
       
    }
   }
        
  
  const handleOrderStatus = (id) => {
    const confirmation = window.confirm('Are you sure we want to confirm  this order')
    if (confirmation) {
      fetch(`http://localhost:5000/allmypurchages/${id}`,{
        method:'PUT',
      })
        .then(res => res.json())
        .then(data => {
        console.log(data);
      })
    }
  }
  
    return (
        <div>
            <h2>Purchage Items {allMyPurchages.length}</h2>
            
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
            <TableCell align="right">Order Delete</TableCell>
            <TableCell align="right">Order Confirm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {allMyPurchages.map((row) => (
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
              <TableCell align="right"><Button onClick={()=>{handleDelete(row._id)}}>DELETE</Button></TableCell>
              <TableCell align="right"><Button onClick={() => { handleOrderStatus(row._id) }}>Confirm</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrder;