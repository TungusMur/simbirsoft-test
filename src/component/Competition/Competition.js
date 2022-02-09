import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, useParams, useNavigate } from 'react-router';
import Calendar from 'common/Calendar';
import { getDataId, deleteMatches } from 'Store/reducers/reducerMathes';
import Button from 'common/Button';
import './Competition.scss';

// eslint-disable-next-line no-shadow
const Competition = ({ dataId, statusId, getDataId, deleteMatches }) => {
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    getDataId('competitions', params.id);
    return () => {
      deleteMatches();
    };
  }, []);

  return (
    <div className="competition">
      <div className="competitionData">
        <div className="competitionInfo">
          {statusId === 200 ? (
            <div className="competitionInfoForm">
              {dataId.emblemUrl ? (
                <div className="emblemUrl">
                  <img alt="emblemUrl" src={dataId.emblemUrl} />
                </div>
              ) : null}
              <div className="competitionText">
                <div className="competitionName">
                  <h5>{dataId.name}</h5>
                </div>
                <div className="competitionArea">
                  <h2>{dataId.area.name}</h2>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="competitionForm">
          <div className="competitionFormAction">
            <Calendar
              dateFrom={JSON.stringify(params) !== '{}' && params.dateFrom ? params.dateFrom : ''}
              dateTo={JSON.stringify(params) !== '{}' && params.dateTo ? params.dateTo : ''}
            />
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
})(Competition);
