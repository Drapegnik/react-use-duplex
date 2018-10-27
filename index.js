'use strict';
const { useReducer } = require('react');

const useDuplex = ({
  onChange,
  left = 'left',
  middle = 'middle',
  right = 'right',
  initialState = middle,
} = {}) => {
  const [{ status, pending, error }, setState] = useReducer(
    (state, action) => ({ ...state, ...action }),
    { status: initialState, pending: false, error: false }
  );

  const handle = mode => {
    const nextStatus = status === mode ? middle : mode;
    const result = onChange && onChange(nextStatus);
    if (result && result.then) {
      setState({ pending: mode, error: false });
      result
        .then(() => setState({ pending: false, status: nextStatus }))
        .catch(error => setState({ pending: false, error }));
    } else {
      setState({ pending: false, status: nextStatus });
    }
  };

  return {
    error,
    state: status,
    pending: !!pending,
    handleLeft: handle.bind(null, left),
    handleRight: handle.bind(null, right),
    pendingLeft: pending === left,
    pendingRight: pending === right,
  };
};

module.exports = useDuplex;
