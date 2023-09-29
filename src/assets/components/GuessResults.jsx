import React from 'react';
import {range} from '../utils'
import Guess from './Guess';

function GuessResults({guessList}) {


  return (
    <div className="guess-results">
      {guessList.map(item =>
        <Guess key={Math.random()} item={item} />)
      }
      {range(6-guessList.length).map(row =>
        <Guess key={row} />)}
    </div>
  );
}

export default GuessResults;



