import React from 'react';
import InputBox from './InputBox';
import GuessResults from './GuessResults';
import HappyEnding from './HappyEnding';
import SadEnding from './SadEnding';

import { sample } from '../../utils'
import { WORDS } from '../../data'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuesslist] = React.useState([]);

  function AddGuess(newGuess) {
    setGuesslist([...guessList, newGuess]);
  }

  let won = false;
  let ended = false;
  if (guessList.includes(answer)) won = true;
  if (guessList.length === 6) ended = true;

  return (
    <>
     <GuessResults guessList={guessList} answer={answer} />
     <InputBox AddGuess={AddGuess} won={won} ended={ended} />
     {won && <HappyEnding num={guessList.length} />}
     {ended && !won && <SadEnding answer={answer} />}
    </>
  );
}

export default Game;
