import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import './Cards.css';
import Box from '@mui/material/Box';
import axios from 'axios';
import './Category.css';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { getAllCard,getFilterCard } from '../../RTKSlice/rtkslice';


import Loader from '../loader/Loader';
import { YaMap } from '../yaMap/YaMap';


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  // const [catFilter, setCatFilter] = useState('All'); 

  const card = useSelector((store) => store.toolkit.card);
  // const cardsArray = useSelector((store) => store.toolkit.cardsArray)
  const dispatch = useDispatch();

  const filterCityHandler = () => {
    // setCatFilter('Город')
    dispatch(getFilterCard('Город'));
    console.log('click on button');
  }
  const filterSeaHandler = () => {
    // setCatFilter('Море')
    dispatch(getFilterCard('Море'));
  }
  const filterMountHandler = () => {
    // setCatFilter('Горы')
    dispatch(getFilterCard('Горы'));
  }

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
    <div >
    <div className="categ">
      <div className='categIcon'>
        <LandscapeOutlinedIcon onClick={filterCityHandler} sx={{ fontSize: 35, color: 'gray' }} />
        <AcUnitOutlinedIcon onClick={filterSeaHandler} sx={{ fontSize: 35, color: 'gray' }} />
        <AirlineSeatIndividualSuiteOutlinedIcon onClick={filterMountHandler} sx={{ fontSize: 35, color: 'gray' }}
        />
      </div>
    </div>

    <Box
      className="wrapper"
      marginTop="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        {card?.map((el) => <SingleCard key={el.id} el={el} />)}
      </Box>
      </div>
  
  );
};

export default Cards;
