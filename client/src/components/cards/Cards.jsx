import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import Box from '@mui/material/Box';
import './Cards.css';
import axios from 'axios';

const Cards = () => {
  const [ card, setCard ]= useState([]);
  const [ photo, setPhoto ] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/allFlat', {withCredentials: true})
    .then((res)=>{
      setCard(res.data.flat)
      setPhoto(res.data.photoflat)
      // console.log('res.data', res.data);
    })

  },[])
  return (
    <Box
    className="wrapper"
    marginTop="20px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
      {
        card.map((el) =>  <SingleCard key={el.id} el={el} photo={photo}/>)
      }
   
    </Box>
  );
};

export default Cards;
