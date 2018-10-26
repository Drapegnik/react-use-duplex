import React from 'react';
import { render } from 'react-dom';
import useDuplex from './';

function App() {
  const { left, middle, right, handleLeft, handleRight } = useDuplex();
  return (
    <div>
      <button onClick={handleLeft}>{left ? 'Approved' : 'Approve'}</button>
      <button onClick={handleRight}>{right ? 'Rejected' : 'Reject'}</button>
    </div>
  );
}

render(<App />, window.root);
