import { NavLink } from 'react-router-dom';

const DataListItem = ({ type, index, item }) => {
  switch (type) {
    case 'teams':
      return (
        <li key={index} className="dataListItem">
          <div className="competitionName">
            <h3>{type === 'teams' ? item.competition.name : null}</h3>
          </div>
          <div className="teamsBattle">
            <div className="awayTeam">
              <h3>Away team</h3>
              <h3>{item.awayTeam.name}</h3>
            </div>
            <h3>vs</h3>
            <div className="homeTeam">
              <h3>Home team</h3>
              <h3>{item.homeTeam.name}</h3>
            </div>
          </div>
          <div className="timeAndAreaEvent">
            <div className="time">
              <div className="utcDate">
                <h3>{item.utcDate.match(/\d\d\d\d-\d\d-\d\d/)}</h3>
              </div>
            </div>
            <div className="area">
              <h3>{type === 'teams' ? item.competition.area.name : null}</h3>
            </div>
          </div>
        </li>
      );
    case 'competitions':
      return (
        <li key={index} className="dataListItem">
          <div className="teamsBattle">
            <div className="awayTeam">
              <h3>Away team</h3>
              <h3>{item.awayTeam.name}</h3>
            </div>
            <h3>vs</h3>
            <div className="homeTeam">
              <h3>Home team</h3>
              <h3>{item.homeTeam.name}</h3>
            </div>
          </div>
          <div className="timeAndAreaEvent">
            <div className="time">
              <div className="utcDate">
                <h3>{item.utcDate.match(/\d\d\d\d-\d\d-\d\d/)}</h3>
              </div>
            </div>
          </div>
        </li>
      );
    case 'search':
      return (
        <li key={index} className="dataListItem">
          <div className="competitionName">
            <NavLink to={`/${document.location.pathname.match(/\w+/)[0]}/id=${item.id}`}>
              <h3>{item.name}</h3>
            </NavLink>
          </div>
        </li>
      );
    default:
      return null;
  }
};

export default DataListItem;
