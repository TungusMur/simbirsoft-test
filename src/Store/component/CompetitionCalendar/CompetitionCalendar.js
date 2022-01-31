import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataMatches } from '../../reducers/reducerApi';

// eslint-disable-next-line no-shadow
const CompetitionCalendar = ({ data, getDataMatches }) => {
  useEffect(() => {
    getDataMatches();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <h1>asd</h1>;
};

export default connect((data) => ({ data: data.reducerApi.data }), { getDataMatches })(CompetitionCalendar);
