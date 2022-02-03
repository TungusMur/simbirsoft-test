/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { connect } from 'react-redux';
import DataList from '../../common/DataList';
import Button from '../../common/Button';

const Search = ({ type, data }) => {
  const params = useParams();
  const location = useLocation();
  const [state, setState] = useState(1);
  const [regex, setRegex] = useState(new RegExp(JSON.stringify(params) !== '{}' ? params.search.toLowerCase() : ''));

  // useEffect(() => {
  //   console.log(JSON.stringify(data[type]) !== '{}' ? data[type].count : 0);
  // }, [data]);

  useEffect(() => {
    setRegex(new RegExp(JSON.stringify(params) !== '{}' ? params.search.toLowerCase() : ''));
    setState(1);
  }, [location]);

  return (
    <div className="search">
      <Button
        type={'<'}
        state={state}
        setState={setState}
        data={data[type]}
        difference={
          JSON.stringify(data[type]) !== '{}'
            ? data[type].count - data[type][type].filter((item) => regex.test(item.name.toLowerCase())).length
            : 0
        }
      />
      <Button
        type={'>'}
        state={state}
        setState={setState}
        data={data[type]}
        difference={
          JSON.stringify(data[type]) !== '{}'
            ? data[type].count - data[type][type].filter((item) => regex.test(item.name.toLowerCase())).length
            : 0
        }
      />
      <DataList type="search" dataCheck={data[type]} dataList={data[type][type]} state={state} regex={regex} />
      <Button
        type={'<'}
        state={state}
        setState={setState}
        data={data[type]}
        difference={
          JSON.stringify(data[type]) !== '{}'
            ? data[type].count - data[type][type].filter((item) => regex.test(item.name.toLowerCase())).length
            : 0
        }
      />
      <Button
        type={'>'}
        state={state}
        setState={setState}
        data={data[type]}
        difference={
          JSON.stringify(data[type]) !== '{}'
            ? data[type].count - data[type][type].filter((item) => regex.test(item.name.toLowerCase())).length
            : 0
        }
      />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }))(Search);
