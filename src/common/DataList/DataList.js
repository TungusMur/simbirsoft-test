/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useRef } from 'react';
import DataListItem from '../DataListItem/DataListItem';
import './DataList.scss';
import '../DataListItem/DataListItem.scss';

const DataList = ({ type, dataCheck, dataList, value }) => {
  switch (type) {
    case 'competitions':
    case 'teams':
      return (
        <div className="dataList">
          <ul>
            {JSON.stringify(dataCheck) !== '{}'
              ? dataList.map((item, index) => <DataListItem key={index} index={index} type={type} item={item} />)
              : null}
          </ul>
        </div>
      );
    case 'search':
      return (
        <div className="dataList">
          <ul>
            {JSON.stringify(dataCheck) !== '{}'
              ? dataList
                  .filter((item) => new RegExp(value).test(item.name.toLowerCase()))
                  .map((item, index) => <DataListItem key={index} index={index} type={type} item={item} />)
              : null}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default DataList;
