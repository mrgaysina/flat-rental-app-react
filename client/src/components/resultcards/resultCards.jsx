import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from '../singleCard/SingleCard'

export const ResultCards = () => {
    const card = useSelector((store) => store.toolkit.card)
    console.log('cards toolkit',card);
  return (
    <div className="wrapper">

        Results
      {card.map((el) => (
        <SingleCard
          key={el.id}
          el={el}
        />
      ))}
      {/* {isFetching && card.map((el) => <Loader />)} */}
    </div>
  )
}
