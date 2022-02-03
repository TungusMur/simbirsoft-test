/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { getMatches } from '../../Store/reducers/reducerApi';
import DataList from '../../common/DataList';
import Button from '../../common/Button';

// eslint-disable-next-line no-shadow
const Matches = ({ type, filter = false, data, status, getMatches }) => {
  const location = useLocation();
  const [state, setState] = useState(1);

  useEffect(() => {
    if (filter) {
      getMatches(
        type,
        document.location.href.match(/id=\d+/g)[0].match(/\d+/g)[0],
        true,
        document.location.href
          .match(/dateFrom=\d\d\d\d-\d\d-\d\d&dateTo=\d\d\d\d-\d\d-\d\d/g)[0]
          .match(/\d\d\d\d-\d\d-\d\d/g)[0],
        document.location.href
          .match(/dateFrom=\d\d\d\d-\d\d-\d\d&dateTo=\d\d\d\d-\d\d-\d\d/g)[0]
          .match(/\d\d\d\d-\d\d-\d\d/g)[1]
      );
    } else {
      getMatches(type, document.location.href.match(/\d+/g)[1], false);
    }
    setState(1);
  }, [location]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log(data);
    console.log(status);
  }, [data]);
  return status === 200 ? (
    <div className="matches">
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />

      <DataList type={type} dataCheck={data} dataList={data.matches} state={state} />

      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  ) : null;
};

export default connect(
  (data) => ({
    data: data.reducerApi.matches.dataMatches,
    status: data.reducerApi.status,
  }),
  {
    getMatches,
  }
)(Matches);
