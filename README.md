# `@rehooks/duplex`

> React hook for duplex buttons state

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/duplex
```

## Usage

```js
import useDuplex from '@rehooks/duplex';

function MyComponent() {
  const { left, middle, right, handleLeft, handleRight } = useDuplex({
    initialState: 'left',
  });
  return (
    <div>
      <button onClick={handleLeft}>{left ? 'Approved' : 'Approve'}</button>
      <button onClick={handleRight}>{right ? 'Rejected' : 'Reject'}</button>
    </div>
  );
}
```
