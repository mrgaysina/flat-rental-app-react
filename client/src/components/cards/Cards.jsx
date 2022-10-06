import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import Box from '@mui/material/Box';
import './Cards.css';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCard } from '../../RTKSlice/rtkslice';
import Loader from '../loader/Loader';
import { YaMap } from '../yaMap/YaMap';


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const card = useSelector((store) => store.toolkit.card);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetching) {
      axios
        .post(
          'http://localhost:3001/allFlat',
          { currentPage },
          { withCredentials: true },
          setIsFetching(true)
        )
        .then((res) => {
          console.log('res.data', res.data);
          dispatch(getAllCard([...card, ...res.data.flat.rows]));
          setCurrentPage((prevState) => prevState + 10);
        })
        .finally(() => {
          setFetching(false);
          setIsFetching(false);
        });

    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (

    <div className="wrapper">
      {card.map((el) => (
        <SingleCard
          key={el.id}
          el={el}
        />
      ))}
      {isFetching && card.map((el) => <Loader />)}
    </div>
  );
};

export default Cards;
