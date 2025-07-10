import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'

export default function ReactStrap() {
  return (
    <div>
      <h1>ReactStrap</h1>
      <TextField></TextField>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"34"}
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
