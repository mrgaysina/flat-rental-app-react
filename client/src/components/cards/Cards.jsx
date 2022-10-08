import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import Box from '@mui/material/Box';
import './Cards.css';
import axios from 'axios';
import './Category.css';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';


import { useDispatch, useSelector } from 'react-redux';
import { getAllCard,getFelterCard } from '../../RTKSlice/rtkslice';


import Loader from '../loader/Loader';
import { YaMap } from '../yaMap/YaMap';


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [catFilter, setCatFilter] = useState('All'); 

  const card = useSelector((store) => store.toolkit.card);
  const cardsArray = useSelector((store) => store.toolkit.cardsArray)
  const dispatch = useDispatch();

  const filterCityHandler = () => {
    setCatFilter('City')
    dispatch(getFilterCard('City'));
    console.log('click on button');
  }
  const filterSeaHandler = () => {
    setCatFilter('Sea')
    dispatch(getFilterCard('Sea'));
  }
  const filterMountHandler = () => {
    setCatFilter('Mount')
    dispatch(getFilterCard('Mount'));
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
    <><div className="categ">
      <div className='categIcon'>
        <LandscapeOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <AcUnitOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <AirlineSeatIndividualSuiteOutlinedIcon
          sx={{ fontSize: 35, color: 'gray' }}
        />
      </div>
    </div>

    <div className="wrapper">
      {card.map((el) => (
        <SingleCard
          key={el.id}
          el={el}
        />
      ))}
      {isFetching && card.map((el) => <Loader />)}
    </div>
    </>
  );
};

export default Cards;
