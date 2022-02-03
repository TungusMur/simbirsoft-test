import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams } from 'react-router';
import Calendar from '../../common/Calendar';
import { getDataId } from '../../Store/reducers/reducerApi';

// eslint-disable-next-line no-shadow
const Competition = ({ dataId, getDataId }) => {
  const params = useParams();

  useEffect(() => {
    getDataId('competitions', params.id);
  }, []);

  return (
    <div className="competition">
      <Calendar
        oldDateFrom={document.location.href.match(/\d+-\d+-\d+/g) || false}
        oldDateTo={document.location.href.match(/\d+-\d+-\d+/g) || false}
      />
      {JSON.stringify(dataId) !== '{}' ? (
        <div className="competitionInfo">
          <div className="competitionName">
            <h1>{dataId.name}</h1>
          </div>
          <div className="competitionArea">
            <h1>{dataId.area.name}</h1>
          </div>
        </div>
      ) : (
        <h2>Загрузка...</h2>
      )}
      <Outlet />
    </div>
  );
};

export default connect((data) => ({ dataId: data.reducerApi.matches.dataId }), { getDataId })(Competition);
