import React from 'react';
import {range} from '../utils'
import Guess from './Guess';

function GuessResults({guessList}) {


  return (
    <div className="guess-results">
      {guessList.map(item =>
        <Guess key={Math.random()} item={item} />)}
    </div>
  );
}

export default GuessResults;




{/* <div className="grid">
  {range(6).map(row =>
    <div key={row} className="row">
      {range(5).map(col =>
        <div key={col} className="cell"></div>
      )}
    </div>
  )}
</div> */}
