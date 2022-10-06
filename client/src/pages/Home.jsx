import React from 'react';
import './Home.css';
import Cards from '../components/cards/Cards';
import Category from '../components/category/Category';


const Home = () => {
  return (
    <div>
      <Category />
      <div className='cards__box'>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
