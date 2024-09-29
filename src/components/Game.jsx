import React from 'react';
import InputBox from './InputBox';
import GuessResults from './GuessResults';
import HappyEnding from './HappyEnding';
import SadEnding from './SadEnding';

import { sample } from '../utils'
import { WORDS } from '../data'

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuesslist] = React.useState([]);

  function addGuess(newGuess) {
    setGuesslist([...guessList, newGuess]);
  }

  let won = guessList.includes(answer);
  let ended = won || guessList.length === 6;

  return (
    <>
     <GuessResults guessList={guessList} answer={answer} />
     <InputBox addGuess={addGuess} ended={ended} />
     {won && <HappyEnding num={guessList.length} />}
     {ended && !won && <SadEnding answer={answer} />}
    </>
  );
}

export default Game;
