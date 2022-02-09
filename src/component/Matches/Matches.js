/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { connect } from 'react-redux';
import { getMatches } from 'Store/reducers/reducerMathes';
import DataList from 'common/DataList';
import Button from 'common/Button';
import './Matches.scss';

// eslint-disable-next-line no-shadow
const Matches = ({ type, data, statusMatches, getMatches }) => {
  const params = useParams();

  useEffect(() => {
    if (params.dateFrom && params.dateTo) {
      getMatches(type, params.id, true, params.dateFrom, params.dateTo);
    } else {
      getMatches(type, params.id);
    }
  }, [params]);

  return statusMatches === 200 ? (
    <div className="matches">
      <DataList type={type} dataCheck={data} dataList={data.matches} />
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
