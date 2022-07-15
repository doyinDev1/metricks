import './App.css';
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import About from './pages/About/About'
import Home from './pages/Home/Home';
import GitHub from './pages/GitHub/GitHub';
import NotFound from './pages/NotFound/NotFound';

function App() {
  useEffect(() => {
    // To force scrolling to the top on any window change
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path='/about' element={<About />} />
        <Route path='/github' element={<GitHub />} />
        <Route path='/404' element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
