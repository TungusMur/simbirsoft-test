import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams } from 'react-router';
import Calendar from '../../common/Calendar';
import { getDataId } from '../../Store/reducers/reducerApi';

// eslint-disable-next-line no-shadow
const Team = ({ dataId, getDataId }) => {
  const params = useParams();

  useEffect(() => {
    getDataId('teams', params.id);
  }, []);

  return (
    <div className="competition">
      <Calendar
        oldDateFrom={document.location.href.match(/\d+-\d+-\d+/g) || false}
        oldDateTo={document.location.href.match(/\d+-\d+-\d+/g) || false}
      />
      {JSON.stringify(dataId) !== '{}' ? (
        <div className="nameTeam">
          <h1>{dataId.name}</h1>
        </div>
      ) : null}
      <Outlet />
    </div>
  );
};

export default connect((data) => ({ dataId: data.reducerApi.matches.dataId }), { getDataId })(Team);
