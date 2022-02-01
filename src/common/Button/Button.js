const Button = ({ type, state, setState, data }) => {
  const View = {
    '<': (
      <button
        className={state === 1 ? 'notActive' : 'active'}
        onClick={() => {
          if (state !== 1) setState(state - 1);
        }}
      >
        {'<'}
      </button>
    ),
    '>': (
      <button
        className={
          data.length !== 0 &&
          ((data.count % 20 === 0 && data.count / 20 === state) || (data.count % 20 !== 0 && data.count / 20 < state))
            ? 'notActive'
            : 'active'
        }
        onClick={() => {
          if ((data.count % 20 === 0 && data.count / 20 > state) || (data.count % 20 !== 0 && data.count / 20 >= state))
            setState(state + 1);
        }}
      >
        {'>'}
      </button>
    ),
  };
  return View[type];
};

export default Button;
