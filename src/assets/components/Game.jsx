import React from 'react';
import InputBox from './InputBox';
import GuessResults from './GuessResults';

import {sample} from '../utils'
import {WORDS} from '../data/data'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuesslist] = React.useState([]);

  function AddGuess(newGuess) {
    setGuesslist([...guessList, newGuess]);
  }

  return (
    <>
     <GuessResults guessList={guessList} />
     <InputBox AddGuess={AddGuess} />
    </>
  );
}

export default Game;
