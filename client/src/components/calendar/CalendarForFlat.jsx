import React, {useState} from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider,CalendarPicker } from '@mui/x-date-pickers';


export const CalendarForFlat = () => {

    const [date, setDate] = useState(dayjs(new Date()))

    return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
        </Grid>
      </Grid>
    </LocalizationProvider>
    )
}

