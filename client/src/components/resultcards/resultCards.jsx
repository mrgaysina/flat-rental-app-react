import React, {useEffect, useState} from 'react'
import styles from '../../pages/Results.module.css';
import { useSelector } from 'react-redux'
import ResultSingleCard from './ResultSingleCard'
import { ResultsMap } from './ResultsMap'


export const ResultCards = () => {
  const card = useSelector((store) => store.toolkit.card)

  return (
    <div className={styles.wrapper_results}>
      {card.map((el) => (
        <ResultSingleCard
          key={el.id}
          el={el}
        />
      ))}
      {/* {isFetching && card.map((el) => <Loader />)} */}
    </div>
  )
}
