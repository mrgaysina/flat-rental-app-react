import './App.css';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Flat } from './pages/Flat'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path={`/`} element={<Home />}/>
        <Route path={`/flat/:id`} element={<Flat />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
