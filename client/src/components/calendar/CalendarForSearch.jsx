import React, { useState } from 'react';
import './Calendar.css';
import dayjs from 'dayjs';
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export function CalendarForSearch({ id }) {
  const [checkin, setCheckin] = useState(dayjs(new Date()));
  const [checkout, setCheckOut] = useState(dayjs(new Date()));
  const [age, setAge] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleBooking = () => {
    axios
      .post(
        `http://localhost:3001/flat/booking/${id}`,
        { id, checkin, checkout },
        { withCredentials: true }
      )
      .then((res) => {});
  };

  return (
    <Box
      marginTop="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        width="300px"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              disablePast="true"
              label="Прибытие"
              renderInput={(params) => <TextField {...params} />}
              value={checkin}
              onChange={(value) => {
                setCheckin(value);
              }}
            />
          </Stack>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              disablePast="true"
              label="Выезд"
              renderInput={(params) => <TextField {...params} />}
              value={checkout}
              onChange={(value) => {
                setCheckOut(value);
              }}
            />
          </Stack>
        </LocalizationProvider>
      </Box>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Гостей</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Гостей"
          onChange={handleChange}
        >
          <MenuItem value={1}>1 гость</MenuItem>
          <MenuItem value={2}>2 гостя</MenuItem>
          <MenuItem value={3}>3 гостя</MenuItem>
          <MenuItem value={4}>4 гостя</MenuItem>
        </Select>
      </FormControl>
      <Button
        sx={{ width: '300px', height: '40px' }}
        variant="contained"
        onClick={handleBooking}
      >
        Забронировать
      </Button>
      <Typography>Пока вы ничего не платите</Typography>
    </Box>
  );
}
