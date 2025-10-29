import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FaEdit } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  height: 'auto',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  '&:focus': {
    outline: 'none'
  }
};

function Edit() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen} className='btn text-primary fs-2'><FaEdit /></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 3 }}>
            Edit Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Personal Details */}
            <Box sx={{ mb: 4 }}>
              <h3>Personal Details</h3>
              <div className="d-flex row p-3">
                <TextField id="standard-basic" label="Full Name" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Job Title" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Location" variant="standard" sx={{ mb: 2 }} />
              </div>
            </Box>

            {/* Contact Details */}
            <Box sx={{ mb: 4 }}>
              <h3>Contact Details</h3>
              <div className="d-flex row p-3">
                <TextField id="standard-basic" label="Email" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Phone Number" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Github Profile Link" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="LinkedIn Profile Link" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Portfolio Link" variant="standard" sx={{ mb: 2 }} />
              </div>
            </Box>

            {/* Educational Details */}
            <Box sx={{ mb: 4 }}>
              <h3>Educational Details</h3>
              <div className="d-flex row p-3">
                <TextField id="standard-basic" label="Course Name" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="College Name" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="University" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Year of Passout" variant="standard" sx={{ mb: 2 }} />
              </div>
            </Box>

            {/* Professional Details */}
            <Box sx={{ mb: 4 }}>
              <h3>Professional Details</h3>
              <div className="d-flex row p-3">
                <TextField id="standard-basic" label="Job or Internship" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Company Name" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Location" variant="standard" sx={{ mb: 2 }} />
                <TextField id="standard-basic" label="Duration" variant="standard" sx={{ mb: 2 }} />
              </div>

              {/* Skills */}
              <h3>Skills </h3>
              <Stack spacing={2}>
                <TextField id='Standard-basic' label='Add Skill' variant='standard' />
                <Button className='me-3' variant='text' sx={{ maxWidth: '40px' }} >Add</Button>
              </Stack>
              {/* Added Skills */}
              <h5>Added Skills : </h5>
              <div className="d-flex justify-content-between">
                <span className='btn btn-primary d-flex align-items-center justify-content-center'>Skill <button className='btn text-light'>X</button></span>
              </div>
              {/* Professional Summary */}
              <h3>Professional Summary</h3>
              <div className="d-flex row p-3">
                <TextField id="standard-multiline-static" label="Write a short summary of yourself" multiline rows={4} defaultValue="Eg : I'm a passionate full-stack developer with hands-on experience in React,Node ..." variant="standard" value="" />
              </div>
            </Box>
            {/* update button */}
            <Button variant="contained" color="primary">
              Update
            </Button>
            {/* Save Button */}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
