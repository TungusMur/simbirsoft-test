import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { getMatches } from '../../Store/reducers/reducerApi';
import DataList from '../../common/DataList';
import Button from '../../common/Button';

// eslint-disable-next-line no-shadow
const Matches = ({ data, getMatches }) => {
  //   const location = useLocation();

  const [state, setState] = useState(1);

  useEffect(() => {
    getMatches('competitions', document.location.href.match(/\d+/g)[1]);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="matches">
      <h1>{document.location.href.match(/\d+/g)[1]}</h1>

      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />

      <DataList dataCheck={data} dataList={data.matches} state={state} />

      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getMatches })(Matches);
