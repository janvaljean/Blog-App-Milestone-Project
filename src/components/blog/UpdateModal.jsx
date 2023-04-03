import { Box, TextField } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { modalStyle } from '../../globalStyles/globalStyles';


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

export default function BasicModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            //onSubmit={handleSubmit}
          >
            <TextField
              label="Title"
              name="title"
              id="title"
              type="text"
              variant="outlined"
              required 
            //   value={info?.title}
             // onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="text"
              variant="outlined"
              required
              //value={info?.image}
              //onChange={handleChange}
            />

            <TextField
              label="Category"
              name="category"
              id="category"
              type="url"
              variant="outlined"
              required
             // value={info?.category}
             // onChange={handleChange}
            />
             <TextField
              label="Status"
              name="status"
              id="status"
              type="url"
              variant="outlined"
              required
             // value={info?.status}
             // onChange={handleChange}
            />
            <TextField
              label="Content"
              name="content"
              id="content"
              type="tel"
              variant="outlined"
              required
             // value={info?.content}
             // onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}