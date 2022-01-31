import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../reducers/reducerApi';

// eslint-disable-next-line no-shadow
const Data = ({ data, getData }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <ul>
        {data?.length !== 0
          ? data.competitions
              .filter((item, index) => state * 20 > index && state * 20 - 20 < index)
              .map((item, index) => <li key={index}>{item.name}</li>)
          : null}
      </ul>
      <button
        className={state === 1 ? 'notActive' : 'active'}
        onClick={() => {
          if (state !== 1) setState(state - 1);
        }}
      >
        {'<'}
      </button>
      <button
        className={
          data?.length !== 0 &&
          ((data.competitions.length % 20 === 0 && data.competitions.length / 20 === state) ||
            (data.competitions.length % 20 !== 0 && data.competitions.length / 20 < state))
            ? 'notActive'
            : 'active'
        }
        onClick={() => {
          if (
            (data.competitions.length % 20 === 0 && data.competitions.length / 20 > state) ||
            (data.competitions.length % 20 !== 0 && data.competitions.length / 20 >= state)
          )
            setState(state + 1);
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getData })(Data);
