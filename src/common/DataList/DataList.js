// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const DataList = ({ dataCheck, dataList, state, name }) => (
  <div className="competitionList">
    <ul>
      {JSON.stringify(dataCheck) !== '{}'
        ? dataList
            .filter((item, index) => state * 20 > index + 1 && state * 20 - 20 < index + 1)
            .map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
              </li>
            ))
        : null}
    </ul>
  </div>
);

export default DataList;
