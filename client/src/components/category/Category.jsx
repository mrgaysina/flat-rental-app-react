import React from 'react';
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

const Category = () => {
  return (
    <div className="categ">
      <div className='categIcon'>
        <LandscapeOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <AcUnitOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <AirlineSeatIndividualSuiteOutlinedIcon
          sx={{ fontSize: 35, color: 'gray' }}
        />
        <ApartmentIcon sx={{ fontSize: 35, color: 'gray' }} />
        <BeachAccessIcon sx={{ fontSize: 35, color: 'gray' }} />
        <AccountBalanceOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <CatchingPokemonIcon sx={{ fontSize: 35, color: 'gray' }} />
        <CastleOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <LocalFireDepartmentOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
        <LunchDiningOutlinedIcon sx={{ fontSize: 35, color: 'gray' }} />
      </div>
    </div>
  );
};

export default Category;
