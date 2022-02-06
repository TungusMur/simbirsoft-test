/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { getMatches } from 'Store/reducers/reducerMathes';
import DataList from 'common/DataList';
import Button from 'common/Button';
import './Matches.scss';

// eslint-disable-next-line no-shadow
const Matches = ({ type, filter = false, data, statusMatches, getMatches }) => {
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
      getMatches(type, document.location.href.match(/\d+/g)[1]);
    }
    setState(1);
  }, [location]);

  // useEffect(() => {
  //   return deleteMatches();
  // }, []);

  return statusMatches === 200 ? (
    <div className="matches">
      {/* <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} /> */}

      <DataList type={type} dataCheck={data} dataList={data.matches} state={state} />

      {/* <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} /> */}
    </div>
  ) : null;
};

export default connect(
  (data) => ({
    data: data.reducerMathes.dataMatches,
    statusMatches: data.reducerMathes.statusMatches,
  }),
  {
    getMatches,
  }
)(Matches);
