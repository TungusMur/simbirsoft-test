import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../reducers/reducerApi';

// eslint-disable-next-line no-shadow
const Data = ({ data, getData }) => {
  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return <h1>asd</h1>;
};

export default connect((data) => ({ data: data.reducerApi.data }), { getData })(Data);
