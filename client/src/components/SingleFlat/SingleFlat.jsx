import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flats = () => {
  const [ card, setCard ]= useState([]);
 


  useEffect(() => {
    axios.get(`http://localhost:3001/singleFlat/${}`, {withCredentials: true})
    .then((res)=>{
      setCard(res.data.flat)
      setPhoto(res.data.photoflat)
      // console.log('res.data', res.data);
    })

  },[])
  return (
    
  );
};

export default Flats;
