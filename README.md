# `react-use-duplex`

> React hook for duplex buttons state

[![Image from Gyazo](https://i.gyazo.com/06f2e4f7c95fe42f1e0d111d49bc784e.gif)](https://gyazo.com/06f2e4f7c95fe42f1e0d111d49bc784e) [![Image from Gyazo](https://i.gyazo.com/3602542c34219b7917b5c8ef14b9f3fc.gif)](https://gyazo.com/3602542c34219b7917b5c8ef14b9f3fc)

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
npm i react-use-duplex
```

## Usage

```jsx
import useDuplex from 'react-use-duplex';

const MyComponent = () => {
  const { state, handleLeft, handleRight } = useDuplex({
    initialState: 'left', // optional
  });

  return (
    <div>
      <button onClick={handleLeft}>
        {state === 'left' ? 'Approved 👍' : 'Approve'}
      </button>
      <button onClick={handleRight}>
        {state === 'right' ? 'Rejected 👎' : 'Reject'}
      </button>
    </div>
  );
};
```

## Example

[Open in CodeSandbox](https://codesandbox.io/s/0yzxqry6pp)
