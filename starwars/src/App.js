import React, { useState, useEffect } from "react";
import CharCard from './components/CharCard';
import { StyledContainer } from './components/Styled';
import axios from 'axios';

import './App.scss';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        //console.log(res.data);
        setChar(res.data);
        // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
        // side effect in a component, you want to think about which state and/or props it should
        // sync up with, if any.
      });
  }, [])

  return (
    <StyledContainer>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {char.map(data => (
          <CharCard gender={data.gender}
            age={data.birth_year}
            height={data.height}
            mass={data.mass}
            hairColor={data.hair_color}
            eyeColor={data.eye_color} />
        ))}
      </div>
    </StyledContainer>
  );
}

export default App;
