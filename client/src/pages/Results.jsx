import React, { useState, useEffect} from 'react'
import Cards from '../components/cards/Cards'
import './results.css'
import { useSelector } from 'react-redux'
import { ResultCards } from '../components/resultcards/resultCards'
import { ResultsMap } from '../components/resultcards/ResultsMap'

export const Results = () => {
  const card = useSelector((store) => store.toolkit.card)

  const [point, setPoint] = useState([]);

  const arrPoint = [];

  useEffect(() => {
    card.map((el) => {
      console.log(el.coordinates);
      arrPoint.push(el.coordinates.split(', '))
      setPoint(arrPoint);
      console.log('pointpoint',point);
    })
  }, [])


  return (
    <div className='result__page'>
        <ResultCards className='cards'/>
        <ResultsMap
          point={point}
          className='resultcard__box'
        />
  </div>
  )
}