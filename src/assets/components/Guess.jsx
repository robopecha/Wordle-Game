import React from 'react';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {guess
        ? guess.split('').map((letter, index) =>
            <span key={index} className={`cell ${result[index].status}`}>{letter}</span>)
        : range(5).map(col =>
            <span key={col} className="cell"></span>)
      }
    </p>
  );
}

export default Guess;
