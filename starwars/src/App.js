import React, { useState, useEffect } from "react";
import CharCard from './components/CharCard';
import { Luke, C3po, R2d2, R5d4, DarthV, Owen, Leia, Biggs, ObiWan, Beru } from './components/PhotoCard';
import { StyledContainer } from './components/Styled';
import axios from 'axios';

import './App.scss';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char, setChar] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        // console.log(res.data);
        setChar(res.data.results);
        // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
        // side effect in a component, you want to think about which state and/or props it should
        // sync up with, if any.
      })
      .catch(err => {
        console.log('error occurred', error);
      })
  }, [])

  return (
    <StyledContainer>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className='characters'>
          <div className='charCards'>
            {char.map(results => (
              <CharCard name={results.name}
                gender={results.gender}
                age={results.birth_year}
                height={results.height}
                mass={results.mass}
                hair={results.hair_color}
                eyes={results.eye_color} />
            ))}
          </div>
          <div className='charPhotos'>
            <Luke />
            <C3po />
            <R2d2 />
            <DarthV />
            <Leia />
            <Owen />
            <Beru />
            <R5d4 />
            <Biggs />
            <ObiWan />
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default App;
