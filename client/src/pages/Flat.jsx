import React from 'react'
import { useParams } from 'react-router-dom';
import { Calculator } from '../components/calculator/Calculator';
import { CalendarForFlat } from '../components/calendar/CalendarForFlat';
import { Box } from '@mui/material';

export const Flat = () => {

  const { id } = useParams();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
    <Calculator id={id}/>
    </Box>
    
  )
}
