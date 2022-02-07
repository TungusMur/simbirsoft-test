/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Calendar.scss';

const Calendar = () => {
  const location = useLocation();
  const [dateFrom, setDateFrom] = useState(
    document.location.href.match(/\d+-\d+-\d+/g) ? document.location.href.match(/\d+-\d+-\d+/g)[0] : ''
  );
  const [dateTo, setDateTo] = useState(
    document.location.href.match(/\d+-\d+-\d+/g) ? document.location.href.match(/\d+-\d+-\d+/g)[1] : ''
  );
  const navigation = useNavigate();

  useEffect(() => {
    setDateFrom(document.location.href.match(/\d+-\d+-\d+/g) ? document.location.href.match(/\d+-\d+-\d+/g)[0] : '');
    setDateTo(document.location.href.match(/\d+-\d+-\d+/g) ? document.location.href.match(/\d+-\d+-\d+/g)[1] : '');
    console.log(location);
  }, [location]);

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
                setDateFrom(e.target.value);
              }}
              value={dateFrom}
            />
          </div>

          <div className="date dateTo">
            <h2>До</h2>
            <input
              type="date"
              onChange={(e) => {
                setDateTo(e.target.value);
              }}
              value={dateTo}
            />
          </div>
        </div>
      </div>
      <div className="calendarButton">
        <button
          onClick={() => {
            if (dateFrom <= dateTo && dateFrom !== '' && dateTo !== '') {
              navigation(`dateFrom=${dateFrom}&dateTo=${dateTo}`);
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
