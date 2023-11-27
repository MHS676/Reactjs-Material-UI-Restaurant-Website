import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(formData);

    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout align={'center'}>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, est.
          Optio, voluptatum porro! Ex, minus exercitationem. Consectetur beatae
          porro tenetur nemo assumenda totam doloribus atque neque.
        </p>
      </Box>
      <Box
        sx={{
          m: 10,
          width: '600px',
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white',}}
                  align='center'
                >
                  Contact
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Layout>
  );
};

export default Contact;
