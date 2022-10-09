import * as React from 'react';
import './Calculator.css';
import { Box, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import { CalendarForSearch } from '../calendar/CalendarForSearch';
import { useEffect, useState } from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

export const Calculator = ({ id }) => {
  const [cost, setCost] = useState('');
  const [rate, setRate] = useState(0);
  const [guests, setGuests] = useState(0)

  useEffect(() => {
    flatHandler();
  }, []);

  const flatHandler = () => {
    axios
      .post(
        `http://localhost:3001/flat/${id}`,
        { id },
        { withCredentials: true }
      )
      .then((res) => {
        setCost(res.data.jsonFlat);
        const avgRate = res.data.review.reduce((acc, el) => acc + el.rate, 0);
        setRate(avgRate / res.data.review.length);
        setGuests(res.data.jsonFlat.guestsQty)
      });
  };

  return (
    <Box className="calc">
      <Box sx={{ display: 'flex', justifyContent:"space-between" }}>
        <Typography variant="h5">
          {cost.costPerNight}
          <CurrencyRubleIcon />{' '}
        </Typography>
        <Typography>
          <StarRateIcon />
          {rate}
        </Typography>
      </Box>
      <CalendarForSearch id={id} guests={guests} cost={cost.costPerNight}/>
    </Box>
  );
};
