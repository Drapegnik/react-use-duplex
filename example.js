import React from 'react';
import { render } from 'react-dom';
import useDuplex from './';

const Button = ({ onClick, disabled, pending, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {pending && 'loading...'}
      {!pending && children}
    </button>
  );
};

const App = () => {
  const {
    state,
    handleLeft,
    handleRight,
    pending,
    pendingLeft,
    pendingRight,
    error,
  } = useDuplex({
    left: 'approved',
    middle: 'pending',
    right: 'rejected',
    onChange: value =>
      // some api call
      new Promise(resolve => {
        console.log('onChange: ', value);
        setTimeout(resolve, 500);
      }),
  });

  return (
    <div>
      <Button onClick={handleLeft} disabled={pending} pending={pendingLeft}>
        {state === 'approved' ? 'Approved 👍' : 'Approve'}
      </Button>
      <Button onClick={handleRight} disabled={pending} pending={pendingRight}>
        {state === 'rejected' ? 'Rejected 👎' : 'Reject'}
      </Button>
    </div>
  );
};

render(<App />, window.root);

export default App;
