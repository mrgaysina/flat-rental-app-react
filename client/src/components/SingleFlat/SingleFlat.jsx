import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";

import { addCard, addPhoto} from '../../RTKSlice/rtkslice'

const Flats = () => {
  const [ card, setCard ]= useState([]);
 
  useEffect(() => {
    axios.get(`http://localhost:3001/singleFlat/${}`, {withCredentials: true})
    .then((res)=>{
      setCard(res.data.flat)
      setPhoto(res.data.photoflat)
    })

  },[])
  return (
    
  );
};

export default Flats;
