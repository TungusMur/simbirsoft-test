import './Button.scss';

const Button = ({ type, state, setState, data = {}, difference = 0, value, navigation, setValue }) => {
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
          className="searchFormButton"
          onClick={() => {
            if (value.replace(/\s+/g, '')) {
              navigation(`/${type}/search=${value}`);
              window.scrollTo(0, 0);
            } else {
              navigation(`/${type}`);
              setValue('');
            }
          }}
        >
          Найти
        </button>
      );
    case 'reset':
      return (
        <button
          className="resetSearch"
          onClick={() => {
            if (document.location.href.match(/\d+-\d+-\d+/g)) {
              navigation(`/${document.location.pathname.match(/\w+\/id=\d+/)[0]}`);
              window.scrollTo(0, 0);
            } else if (document.location.pathname.match(/\/\w+\/search=\w+/)) {
              navigation(`/${document.location.pathname.match(/\w+/)[0]}`);
              window.scrollTo(0, 0);
            }
          }}
        >
          Сбросить
        </button>
      );
    default:
      return null;
  }
};

export default Button;
