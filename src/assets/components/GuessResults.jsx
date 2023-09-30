import React from 'react';
import { range } from '../../utils'
import Guess from './Guess';

function GuessResults({ guessList, answer }) {

  return (
    <div className="guess-results">
      {range(6).map((num) => (
        <Guess key={num} guess={guessList[num]} answer={answer} />
        ))}
    </div>
  );
}

export default GuessResults;



// my original version before refactoring:

// <div className="guess-results">
//   {guessList.map((guess, index) =>
//     <Guess key={index} guess={guess} answer={answer} />)
//   }
//   {range(6-guessList.length).map(row =>
//     <Guess key={row} />)}
// </div>
