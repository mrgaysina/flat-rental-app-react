import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import Box from '@mui/material/Box';
import './Cards.css';
import axios from 'axios';

const Cards = () => {
  const [ card, setCard ]= useState([]);
  // const [ date, setDate ] = useState([]);
  // const [ price, setPrice ] = useState([]);
  // const [ mark, setMark ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/allFlat', {withCredentials: true})
    .then((res)=>{
      setCard(res.data)
      // setDate(res.data)
      // setPrice(res.data)
      // setMark(res.data)
      console.log('res.data', res.data);
    })
    // console.log('adress', adress);
    // console.log('date', date);
    // console.log('price', price);
    // console.log('mark', mark);
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
        card.map((el) =>  <SingleCard el={el} key={el.id} setCard={setCard}/>)
      }
   
    </Box>
  );
};

export default Cards;
