import React from 'react';

function HappyEnding({ num }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {num === 1 ? '1 guess!' : `${num} guesses`}</strong>.
      </p>
    </div>
  );
}

export default HappyEnding;
