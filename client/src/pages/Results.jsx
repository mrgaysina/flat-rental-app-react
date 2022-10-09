import React, { useState, useEffect } from 'react';
import Cards from '../components/cards/Cards';
import styles from './Results.module.css';
import { useSelector } from 'react-redux';
import { ResultCards } from '../components/resultcards/resultCards';
import { ResultsMap } from '../components/resultcards/ResultsMap';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Results = () => {
  const card = useSelector((store) => store.toolkit.card);

  const [point, setPoint] = useState([]);

  const arrPoint = [];

  useEffect(() => {
    card.map((el) => {
      console.log(el.coordinates);
      arrPoint.push(el.coordinates.split(', '));
      setPoint(arrPoint);
      console.log('pointpoint', point);
    });
  }, []);

  return (
    <div className={styles.result__page}>
      <ResultCards className={styles.cards} />
      <ResultsMap
        point={point}
        className={styles.resultcard__box}
      />
    </div>
  );
};
