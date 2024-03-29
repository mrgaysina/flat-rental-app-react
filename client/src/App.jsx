import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Flat } from './pages/Flat';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import Protected from './components/signUp/Protected';
import Navigation from './components/signUp/Navigation';
import Content from './components/signUp/Content';
import axios from 'axios';
import { Results } from './pages/Results';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './RTKSlice/rtkslice';
import AddPages from './pages/AddPages';
import MyTrips from './pages/MyTrips';
import Loader from './components/loader/Loader';
import MainLoader from './components/mainLoader/MainLoader';
import { useLocation } from "react-router-dom";
import { getOptionGroupUnstyledUtilityClass } from '@mui/base';

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const user = useSelector((store) => store.toolkit.user);
  const logOutCallback = async () => {
    await axios.post(
      'http://localhost:3001/auth/logout',
      { user },
      {
        withCredentials: true,
      }
    );
    dispatch(getUser({}));
    // Navigate back to startpage
    navigate('/');
    window.location.reload();
  };

  // First thing, check if a refreshtoken exist
  useEffect(() => {
    async function checkRefreshToken() {
      const result = await axios.post(
        'http://localhost:3001/auth/refresh_token',
        {},
        { withCredentials: true }
      );
      console.log('result.data from useEffect App', result.data);
      dispatch(
        getUser({
          id: result.data.id,
          email: result.data.email,
          accesstoken: result.data.accesstoken,
        })
      );
    
      setLoading(false);
    }
    checkRefreshToken();
  }, []);

  if (loading) return <MainLoader/>; 

  return (
    <div className="App">
      <Navbar logOutCallback={logOutCallback} />
      {/* <Navigation logOutCallback={logOutCallback} /> */}
      <Routes>
        <Route
          path="protected"
          element={<Protected />}
        />
        <Route
          path="content"
          element={<Content />}
        />
        <Route
            path={`/favorite/${user.id}`}
            element={<FavoritePage />}
          />
        <Route
          path={`/`}
          element={<Home />}
        />
        <Route
          path={`/addFlats`}
          element={<AddPages />}
        />
        <Route
          path={`/mytrips`}
          element={<MyTrips />}
        />
        <Route
          path={`/results`}
          element={<Results />}
        />
        <Route
          path={`/flat/:id`}
          element={<Flat />}
        />
      </Routes>
    </div>
  );
}

export default App;
