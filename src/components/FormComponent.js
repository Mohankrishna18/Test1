import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';

const FormComponent = ({close,getData}) => {
  const [formValues, setFormValues] = useState({
    amount: '',
    validityInHours: '',
    dataLimitInHours: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axios.post('http://localhost:3010/api/dataplans',formValues).then((res) => {
        console.log(res.data);
        close()
        getData()
    }).catch(    (err) => console.log(err) )
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Amount"
            name="amount"
            value={formValues.amount}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Validity (in hours)"
            name="validityInHours"
            value={formValues.validityInHours}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Data Limit (in hours)"
            name="dataLimitInHours"
            value={formValues.dataLimitInHours}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Start Time"
            name="startTime"
            type="datetime-local"
            value={formValues.startTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="End Time"
            name="endTime"
            type="datetime-local"
            value={formValues.endTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
           
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;