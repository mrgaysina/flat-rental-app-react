import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import SingleCard from '../singleCard/SingleCard'
import { ResultsMap } from '../yaMap/ResultsMap'

export const ResultCards = () => {
  const card = useSelector((store) => store.toolkit.card)

  const [point, setPoint] = useState([]);

  const arrPoint = [];
  useEffect(() => {
    card.map((el) => {
      console.log(el.coordinates);
      arrPoint.push(el.coordinates.split(','))
      setPoint(arrPoint);
    })
  }, [])
  
  console.log('arrPoints',point);
  console.log('cards toolkit',card);


  return (
    <div className="wrapper">
      {card.map((el) => (
        <SingleCard
          key={el.id}
          el={el}
        />
      ))}
      <ResultsMap
          point={point}
        />
      {/* {isFetching && card.map((el) => <Loader />)} */}
    </div>
  )
}
