import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="app">
        <div className="card">
          <h1 className="heading2">Advice Application</h1>
          <h1 className="heading">{advice}</h1>
          <button className="button-53" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
      <div className='fixed bottom-0'>
        <h1 className='font-bold text-center uppercase tracking light'>Developed with &#x1F90D; by <a href="https://devaakashportfolio.w3spaces.com/" target="_blank">Aakash</a></h1>
      </div>
    </>
  );
}

export default App;
