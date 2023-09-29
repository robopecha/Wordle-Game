import React from 'react';
import {range} from '../utils'


function Guess({item}) {

  return (
    <p className="guess">
      {item
        ? [...item].map(letter =>
            <span key={Math.random()} className="cell">{letter}</span>)
        : range(5).map(col =>
            <span key={col} className="cell"></span>)
      }
    </p>
  );
}

export default Guess;
