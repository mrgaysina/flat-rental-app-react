import React, { useState, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { YaMap } from '../components/yaMap/YaMap';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCard } from '../RTKSlice/rtkslice';


export const Flat = () => {

    const { id } = useParams();
    const [x, setX] = useState([])
    const [y, setY] = useState([])

    useEffect(()=>{

      axios.post('http://localhost:3001/yaMap',{id},{withCredentials: true})
      .then((res)=>{
        setX(res.data.coordinats.split(',')[0])
        setY(res.data.coordinats.split(',')[1])
      })
    },[])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}} >
      <YaMap x={x} y={y}/>
    </Box>
    
  )
}
