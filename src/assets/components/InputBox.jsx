import React from 'react';

function InputBox({ AddGuess, won, ended }) {
  const [newGuess, setNewGuess] = React.useState('');


  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        AddGuess(newGuess);
        setNewGuess('');
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          disabled={ended || won}
          required
          id='guess-input'
          name='guess'
          type='text'
          pattern='[A-Za-z]{5}'
          title="Enter a 5 letter word"
          value={newGuess}
          onChange={event => setNewGuess(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default InputBox;
