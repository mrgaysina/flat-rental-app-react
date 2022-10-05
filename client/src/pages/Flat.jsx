import React from 'react'
import { useParams } from 'react-router-dom';

export const Flat = ({el}) => {

    const { id } = useParams();
    
    console.log(id);
  return (
    <div>Flat</div>
    
  )
}
