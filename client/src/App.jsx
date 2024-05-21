import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss'
import { Home } from './pages/Home';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
