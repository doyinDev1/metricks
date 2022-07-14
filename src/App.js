import './App.css';
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import About from './pages/About/About'
import Home from './pages/Home/Home';
import GitHub from './pages/GitHub/GitHub';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path='/about' element={<About />} />
        <Route path='/github' element={<GitHub />} />
      </Routes>
    </>
  );
}

export default App;
