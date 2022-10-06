import './App.css';
import React, {useState, useEffect} from 'react';
// import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Flat } from './pages/Flat'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/signUp/Login'
import Register from './components/signUp/Register'
import Protected from './components/signUp/Protected'
import Navigation from './components/signUp/Navigation'
import Content from './components/signUp/Content'

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logOutCallback = async () => {
    await fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include', // Needed to include the cookie
    });
    // Clear user from context
    setUser({});
    // Navigate back to startpage
    navigate('/');
  }

  // First thing, check if a refreshtoken exist
  useEffect(() => {
    async function checkRefreshToken() {
      const result = await (await fetch('http://localhost:4000/refresh_token', {
        method: 'POST',
        credentials: 'include', // Needed to include the cookie
        headers: {
          'Content-Type': 'application/json',
        }
      })).json();
        setUser({
          accesstoken: result.accesstoken,
        });
        setLoading(false);
    }
    checkRefreshToken();
  }, []);

  // if (loading) return <div>Loading ...</div>


  return (
    <div className="App">
      <Navbar />
      <Navigation logOutCallback={logOutCallback}/>
      <Routes>
        <Route path="login" element={<Login user={user} setUser={setUser}/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="protected" element={<Protected user={user} setUser={setUser}/>}/>
        <Route path="content" element={<Content user={user} setUser={setUser}/>}/>
        {/* <Route path={`/`} element={<Home />}/> */}
        <Route path={`/flat/:id`} element={<Flat />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
