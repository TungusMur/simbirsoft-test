/* eslint-disable no-unused-vars */
import { useLocation, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.scss';

const Calendar = () => {
  const params = useParams();
  const [stateDateFrom, setStateDateFrom] = useState(params.dateFrom ? params.dateFrom : '');
  const [stateDateTo, setStateDateTo] = useState(params.dateTo ? params.dateTo : '');
  const navigation = useNavigate();

  useEffect(() => {
    setStateDateFrom(params.dateFrom ? params.dateFrom : '');
    setStateDateTo(params.dateTo ? params.dateTo : '');
  }, [params]);

  return (
    <div className="calendar">
      <div className="calendarData">
        <h5>Календарь</h5>
        <div className="calendarFrom">
          <div className="date dateFrom">
            <h2>От</h2>
            <input
              type="date"
              onChange={(e) => {
                setStateDateFrom(e.target.value);
              }}
              value={stateDateFrom}
            />
          </div>

          <div className="date dateTo">
            <h2>До</h2>
            <input
              type="date"
              onChange={(e) => {
                setStateDateTo(e.target.value);
              }}
              value={stateDateTo}
            />
          </div>
        </div>
      </div>
      <div className="calendarButton">
        <button
          onClick={() => {
            if (stateDateFrom <= stateDateTo && stateDateFrom !== '' && stateDateTo !== '') {
              navigation(`dateFrom=${stateDateFrom}&dateTo=${stateDateTo}`);
            }
          }}
        >
          Найти
        </button>
      </div>
    </div>
  );
};

export default Calendar;
