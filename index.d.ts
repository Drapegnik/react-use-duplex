interface DuplexShape {
  state: string;
  error: boolean | string;
  pending: boolean;
  handleLeft: function;
  handleRight: function;
  pendingLeft: boolean;
  pendingRight: boolean;
}

interface DuplexInitial {
  initialState: string;
  left: string;
  right: string;
  middle: string;
  onChange: function;
}

export default function useDuplex(initial: DuplexInitial): DuplexShape;
