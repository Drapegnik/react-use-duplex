import test from 'ava';
import React, { createElement } from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import useDuplex from './';

const h = createElement;
const render = ReactTestRenderer.create;

const Button = ({ onClick, disabled, pending, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {pending && 'loading...'}
      {!pending && children}
    </button>
  );
};

const Component = ({ onChange }) => {
  const {
    state,
    handleLeft,
    handleRight,
    pending,
    pendingLeft,
    pendingRight,
  } = useDuplex({
    left: 'approved',
    middle: 'pending',
    right: 'rejected',
    onChange,
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

const duplex = render(h(Component));
const [approveBtn, rejectBtn] = duplex.root.findAllByType('button');

test('initial state in middle', t => {
  t.is(approveBtn.children[0], 'Approve');
  t.is(rejectBtn.children[0], 'Reject');
});

test('should approve', t => {
  approveBtn.props.onClick();
  t.is(approveBtn.children[0], 'Approved 👍');
  t.is(rejectBtn.children[0], 'Reject');
});

test('should reject', t => {
  rejectBtn.props.onClick();
  t.is(approveBtn.children[0], 'Approve');
  t.is(rejectBtn.children[0], 'Rejected 👎');
});

test('should returns to middle', t => {
  rejectBtn.props.onClick();
  t.is(approveBtn.children[0], 'Approve');
  t.is(rejectBtn.children[0], 'Reject');
});

const duplexWithOnChange = render(
  h(Component, {
    onChange: value =>
      // some api call
      new Promise(resolve => {
        console.log('onChange: ', value);
        setTimeout(resolve, 2000);
      }),
  })
);
const [
  approveWithPending,
  rejectWithPending,
] = duplexWithOnChange.root.findAllByType('button');

test('should set pending', t => {
  approveWithPending.props.onClick();
  t.is(approveWithPending.children[0], 'loading...');
  t.not(rejectWithPending.children[0], 'loading...');
  t.true(rejectWithPending.props.disabled);
});
