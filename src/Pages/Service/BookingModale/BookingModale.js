import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Fade } from '@mui/material';
import TextField from '@mui/material/TextField';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModale = ({BookingOpen, handleBookingClose,booking,date}) => {
    const { name, time } = booking
    const handleBookingSubmit=e=>{
        alert('Submitting');
        handleBookingClose()
        e.preventDefault()
    }
    return (
         <Modal
        keepMounted
        open={BookingOpen}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        >
     <Fade in={BookingOpen}>
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" sx={{textAlign:"center",color: '#00e5ff'}}>
            {name}
          </Typography>
             <form onSubmit={handleBookingSubmit}>
                  <TextField
                     disabled
                    sx={{width:"90%" , m:1, }}
                    id="outlined-size-small"
                    defaultValue={time}
                     size="small"
                            
                    />      
                  <TextField
                    sx={{width:"90%", m:1}}
                    id="outlined-size-small"
                    defaultValue="Your Name"
                    size="small"
                    />      
                  <TextField
                    sx={{width:"90%", m:1}}
                    id="outlined-size-small"
                    defaultValue="Phone Number"
                    size="small"
                    />      
                  <TextField
                    sx={{width:"90%", m:1}}
                    id="outlined-size-small"
                    defaultValue="Email"
                    size="small"
                    />      
                    <TextField
                      disabled
                    sx={{width:"90%", m:1}}
                    id="outlined-size-small"
                    defaultValue={date.toDateString()}
                    size="small"
                        />
                    <Button sx={{bgcolor: '#00e5ff',}} style={{ margin:"right"}} type="submit" variant="contained">Submit</Button>    
            </form>
        </Box>
         </Fade>

      </Modal>
    );
};

export default BookingModale;