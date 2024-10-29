import React from 'react';

function InputBox({ addGuess, ended }) {
  const [newGuess, setNewGuess] = React.useState('');

  const id = React.useId();
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        addGuess(newGuess);
        setNewGuess('');
        }}
        className="guess-input-wrapper"
      >
        <label htmlFor='id'>Enter guess:</label>
        <input
          id={id}
          ref={inputRef}
          disabled={ended}
          required
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
