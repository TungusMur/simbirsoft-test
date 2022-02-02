import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCompetitions } from '../../Store/reducers/reducerApi';
import Button from '../../common/Button/Button';

// eslint-disable-next-line no-shadow
const Competitions = ({ data, getCompetitions }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    getCompetitions();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="competition">
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
      <ul>
        {JSON.stringify(data) !== '{}'
          ? data.competitions
              .filter((item, index) => state * 20 > index + 1 && state * 20 - 20 < index + 1)
              .map((item, index) => (
                <li key={index}>
                  <NavLink to={`id=${item.id}`}>
                    <h3>{item.name}</h3>
                  </NavLink>
                </li>
              ))
          : null}
      </ul>
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getCompetitions })(Competitions);
