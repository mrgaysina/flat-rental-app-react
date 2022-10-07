import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TextField, 
         Box, 
         FormControl, 
         InputLabel, 
         Select, 
         MenuItem, 
         Button,
         Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/lab';

import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useEffect } from 'react';


export function CalendarForSearch({id, guests, cost}) {
  const [checkin, setCheckin] = useState(dayjs(new Date()));
  const [checkout, setCheckOut] = useState(dayjs(new Date()));
  const [person, setPerson] = useState()
  const [guestsLimit, setGuestsLimit] = useState([])
  const [bookCost, setBookCost] = useState(1)
  const [duration, setDuration] = useState(0)
  const [value, setValue] = useState([null, null])

  console.log(cost);

  const disableDate = () => {
    axios.get(`http://localhost:3001/flat/booking/${id}`, {withCredentials: true})
    .then((res) => {
      console.log(res.data)
      for (let i = 0; i < res.data; i++) {
        if (res.data[i].startDate)
        return res.data === checkin
      }
    })
    return false
  }

  const handleChange = (event) => {
    setPerson(event.target.value);
    const dur = (checkout - checkin)/(60 * 60 * 24 * 1000);
    console.log('dur',dur * cost);
    setDuration(dur)
    setBookCost(dur * cost)
  };

  const handleBooking = () => {
    axios.post(`http://localhost:3001/flat/booking/${id}`, {id, checkin, checkout, bookCost, duration, person}, {withCredentials: true})
  }

  console.log(value);
  return (
    <Box     
    marginTop="20px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection='column'
    >
      
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection='row'
    width="300px">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
        disablePast="true"
        shouldDisableDate={disableDate}
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
          shouldDisableDate={disableDate}
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
          value={person}
          label="Гостей"
          onChange={handleChange}
        >
          <MenuItem value={1}>1 гость</MenuItem>
          <MenuItem value={2}>2 гостя</MenuItem>
          <MenuItem value={3}>3 гостя</MenuItem>
          <MenuItem value={4}>4 гостя</MenuItem>
        </Select>
    </FormControl>
    <Button onClick={handleBooking}>Забронировать</Button>
    <Typography>Пока вы ничего не платите</Typography>
  </Box>
  );
}
