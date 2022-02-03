const Button = ({ type, state, setState, data = {}, difference = 0, value, navigation, setValue }) => {
  console.log(data);
  switch (type) {
    case '<':
      return JSON.stringify(data) !== '{}' && data.count - difference > 20 ? (
        <button
          className={`backButton ${state === 1 ? 'notActive' : 'active'}`}
          onClick={() => {
            if (state !== 1) setState(state - 1);
          }}
        >
          {'<'}
        </button>
      ) : null;
    case '>':
      return JSON.stringify(data) !== '{}' && data.count - difference > 20 ? (
        <button
          className={`nextButton ${
            JSON.stringify(data) !== '{}' &&
            (Math.ceil((data.count - difference) / 20) === state || data.count - difference === 0)
              ? 'notActive'
              : 'active'
          }`}
          onClick={() => {
            if (
              ((data.count - difference) % 20 === 0 && (data.count - difference) / 20 > state) ||
              ((data.count - difference) % 20 !== 0 && (data.count - difference) / 20 >= state)
            )
              setState(state + 1);
          }}
        >
          {'>'}
        </button>
      ) : null;
    case 'competitions':
    case 'teams':
      return (
        <button
          className="searchButton"
          onClick={() => {
            if (value.replace(/\s+/g, '')) {
              navigation(`/${type}/search=${value}`);
            } else {
              navigation(`/${type}`);
              setValue('');
            }
          }}
        >
          Найти
        </button>
      );
    default:
      return null;
  }
};

export default Button;
