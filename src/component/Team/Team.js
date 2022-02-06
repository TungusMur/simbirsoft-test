import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router';
import Calendar from 'common/Calendar';
import { getDataId, deleteMatches } from 'Store/reducers/reducerMathes';
import Button from 'common/Button';
import './Team.scss';

// eslint-disable-next-line no-shadow
const Team = ({ dataId, statusId, getDataId, deleteMatches }) => {
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    getDataId('teams', params.id);

    return () => {
      deleteMatches();
    };
  }, []);

  return (
    <div className="team">
      <div className="teamData">
        <div className="teamInfo">
          {statusId === 200 ? (
            <div className="teamInfoForm">
              {dataId.crestUrl ? (
                <div className="crestUrl">
                  <img alt="crestUrl" src={dataId.crestUrl} />
                </div>
              ) : null}
              <div className="teamName">
                <h5>{dataId.name}</h5>
              </div>
            </div>
          ) : null}
        </div>
        <div className="teamForm">
          <div className="teamFormAction">
            <Calendar />
          </div>
        </div>
        <Button type="reset" navigation={navigation} />
      </div>
      <Outlet />
    </div>
  );
};

export default connect((data) => ({ dataId: data.reducerMathes.dataId, statusId: data.reducerMathes.statusId }), {
  getDataId,
  deleteMatches,
})(Team);
