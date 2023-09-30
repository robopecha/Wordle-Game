import React from 'react';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map(num =>
        result
        ? <span key={num} className={`cell ${result[num].status}`}>{result[num].letter}</span>
        : <span key={num} className="cell"></span>
        )}
    </p>
  );
}

export default Guess;



// my original version before refactoring:

// <p className="guess">
//   {guess
//     ? guess.split('').map((letter, index) =>
//         <span key={index} className={`cell ${result[index].status}`}>{letter}</span>)
//     : range(5).map(num =>
//         <span key={num} className="cell"></span>)
//   }
// </p>
