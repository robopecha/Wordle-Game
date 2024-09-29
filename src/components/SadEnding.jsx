import React from 'react';

function SadEnding({ answer }) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  );
}

export default SadEnding;
