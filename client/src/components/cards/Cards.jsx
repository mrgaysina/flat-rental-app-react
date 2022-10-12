import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import './Cards.css';
import Box from '@mui/material/Box';
import axios from 'axios';
import './Category.css';
import PublicIcon from '@mui/icons-material/Public'; 

import { useDispatch, useSelector } from 'react-redux';
import { getAllCard,getFilterCard } from '../../RTKSlice/rtkslice';

import Loader from '../loader/Loader';
import Chip from '@mui/material/Chip';
import SurfingOutlinedIcon from '@mui/icons-material/SurfingOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import SkateboardingOutlinedIcon from '@mui/icons-material/SkateboardingOutlined';


const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true); //! Подгрузка порционалная
  const [isFetching, setIsFetching] = useState(false);//! скелетоны
  const [catFilter, setCatFilter] = useState('All');

  const card = useSelector((store) => store.toolkit.card);
  const dispatch = useDispatch();

  const handlFilter = (catagory) => {
    setIsFetching(true)
    setCatFilter(catagory)

    axios.get(`http://localhost:3001/allFlat/${catagory}`)
    .then((res)=>{
      
      dispatch(getFilterCard(res.data))
    })
    setIsFetching(false)
  }

  useEffect(()=>{
    return setIsFetching(true)
  },[])



  useEffect(() => {
    if (fetching) {
      axios
        .post(
          'http://localhost:3001/allFlat',
          { currentPage },
          { withCredentials: true },
        )
        .then((res) => {
          console.log('res.data card', res.data);
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
  }, [catFilter]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      catFilter === 'All'
    ) {
      setFetching(true);
    }
  };

  return (
    <div>
      <div className="categ">
        <div className="categIcon">
          <Chip
            onClick={() => handlFilter('Город')}
            icon={
              <SkateboardingOutlinedIcon sx={{ fontSize: 22, color: 'gray' }} />
            }
            label="Город"
            variant="filled"
          />
          <Chip
            onClick={() => handlFilter('Море')}
            icon={<SurfingOutlinedIcon sx={{ fontSize: 22, color: 'gray' }} />}
            label="Море"
            variant="filled"
          />
          <Chip
            onClick={() => handlFilter('Горы')}
            icon={<HikingOutlinedIcon sx={{ fontSize: 22, color: 'gray' }} />}
            label="Горы"
            variant="filled"
          />
          <Chip
            onClick={()=> handlFilter('All')}
            icon={
              <PublicIcon
                sx={{
                  paddingLeft: '12px',
                  fontSize: 22,
                  color: 'gray',
                }}
              />
            }
            variant="filled"
          />
        </div>
      </div>
      <Box
        className="wrapper"
        marginTop="20px"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        {isFetching ? (
          <>
            <Loader /> <Loader /> <Loader /> <Loader /> <Loader /> <Loader />{' '}
            <Loader /> <Loader /> <Loader /> <Loader /> <Loader /> <Loader />{' '}
            <Loader /> <Loader /> <Loader /> <Loader /> <Loader /> <Loader />{' '}
            <Loader /> <Loader />
          </>
        ) : (
          card?.map((el) => (
            <SingleCard
              key={el.id}
              el={el}
            />
          ))
        )}
      </Box>
    </div>
  );
};

export default Cards;
