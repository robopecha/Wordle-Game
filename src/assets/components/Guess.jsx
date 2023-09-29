import React from 'react';



function Guess({item}) {

  return (
    <p className="guess">
      {item
        ? [...item].map(letter =>
            <span key={Math.random()} className="cell">{letter}</span>)
        : <span className="cell"></span>
      }
    </p>
  );
}

export default Guess;
