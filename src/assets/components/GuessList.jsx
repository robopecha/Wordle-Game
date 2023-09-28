import React from 'react';

function GuessList({guessList}) {


  return (
    <div className="guess-results">
      {guessList.map(item =>
      <p key={Math.random()} className="guess">{item}</p>)}
    </div>
  );
}

export default GuessList;
