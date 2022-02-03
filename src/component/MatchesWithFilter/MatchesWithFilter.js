import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { getMatchesWithFilter } from '../../Store/reducers/reducerApi';
import Button from '../../common/Button';
import DataList from '../../common/DataList';

// eslint-disable-next-line no-shadow
const MatchesWithFilter = ({ data, getMatchesWithFilter }) => {
  const location = useLocation();
  const [state, setState] = useState(1);

  useEffect(() => {
    getMatchesWithFilter(
      'competitions',
      document.location.href.match(/id=\d+/g)[0].match(/\d+/g)[0],
      document.location.href.match(/dateFrom=\d+-\d+-\d+&dateTo=\d+-\d+-\d+/g)[0].match(/\d+-\d+-\d+/g)[0],
      document.location.href.match(/dateFrom=\d+-\d+-\d+&dateTo=\d+-\d+-\d+/g)[0].match(/\d+-\d+-\d+/g)[1]
    );
  }, [location]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="matchesWithFilter">
      <h1>{document.location.href.match(/\d+/g)[1]}</h1>

      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />

      <DataList dataCheck={data} dataList={data.matches} state={state} />

      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getMatchesWithFilter })(MatchesWithFilter);
