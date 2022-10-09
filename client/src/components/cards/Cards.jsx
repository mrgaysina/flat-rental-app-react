import React, { useState, useEffect } from 'react';
import SingleCard from '../../components/singleCard/SingleCard';
import './Cards.css';
import Box from '@mui/material/Box';
import axios from 'axios';
import './Category.css';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';
import PublicIcon from '@mui/icons-material/Public'; 

import { useDispatch, useSelector } from 'react-redux';
import { getAllCard,getFilterCard } from '../../RTKSlice/rtkslice';

import Loader from '../loader/Loader';

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [isFetching, setIsFetching] = useState(false); //!!!!
  const [catFilter, setCatFilter] = useState('All'); 

  const card = useSelector((store) => store.toolkit.card);
  const dispatch = useDispatch();

  const handlFilter = (catagory) => {
    setIsFetching(true)
    setCatFilter(catagory)

    axios.get(`http://localhost:3001/allFlat/${catagory}`)
    .then((res)=>{
      console.log('res.data!!!!!!!!',res.data);
      dispatch(getFilterCard(res.data))
    })
    setIsFetching(false)
  }

  useEffect(()=>{
    return setIsFetching(true) //???????
  },[])

  useEffect(() => {
    if (fetching) {
      axios
        .post(
          'http://localhost:3001/allFlat',
          { currentPage },
          { withCredentials: true },
          // setIsFetching(true) //???????
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
  }, [catFilter]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100 && catFilter === 'All'
    ) {
      setFetching(true);
    }
  };

  return (
    <div >
    <div className="categ">
      <div className='categIcon'>
        <LandscapeOutlinedIcon onClick={()=> handlFilter('Город')} sx={{ fontSize: 35, color: 'gray' }} />
        <AcUnitOutlinedIcon onClick={()=> handlFilter('Море')} sx={{ fontSize: 35, color: 'gray' }} />
        <AirlineSeatIndividualSuiteOutlinedIcon onClick={()=> handlFilter('Горы')} sx={{ fontSize: 35, color: 'gray' }}/>
        <PublicIcon onClick={()=> handlFilter('All')} sx={{ fontSize: 35, color: 'gray' }}/>
      </div>
    </div>

    <Box
      className="wrapper"
      marginTop="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
        {isFetching ? <><Loader/><Loader/><Loader/><Loader/><Loader/><Loader/><Loader/><Loader/></> : card?.map((el) => <SingleCard key={el.id} el={el}/>)}
      </Box>
      </div>
  
  );
};

export default Cards;
