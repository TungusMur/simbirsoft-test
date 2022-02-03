import DataListItem from '../DataListItem/DataListItem';

const DataList = ({ type, dataCheck, dataList, state, regex }) => {
  switch (type) {
    case 'competitions':
    case 'teams':
      return (
        <div className="dataList">
          <ul>
            {JSON.stringify(dataCheck) !== '{}'
              ? dataList
                  .filter((item, index) => state * 20 > index + 1 && state * 20 - 20 < index + 1)
                  .map((item, index) => <DataListItem key={index} index={index} type={type} item={item} />)
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
                  .filter((item) => regex.test(item.name.toLowerCase()))
                  .filter((item, index) => state * 20 > index + 1 && state * 20 - 20 < index + 1)
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
