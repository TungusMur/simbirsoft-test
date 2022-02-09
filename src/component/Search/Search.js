import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import DataList from '../../common/DataList';
import './Search.scss';

const Search = ({ type, data }) => {
  const params = useParams();
  const [value, setValue] = useState(JSON.stringify(params) !== '{}' ? params.search.toLowerCase() : '');

  useEffect(() => {}, []);

  useEffect(() => {
    setValue(JSON.stringify(params) !== '{}' ? params.search.toLowerCase() : '');
  }, [params]);

  return (
    <div id="searchData" className="searchData">
      <DataList type="search" dataCheck={data[type]} dataList={data[type][type]} new value={value} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi }))(Search);
