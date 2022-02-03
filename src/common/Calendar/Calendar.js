/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Calendar = ({ oldDateFrom, oldDateTo }) => {
  const [dateFrom, setDateFrom] = useState(oldDateFrom ? oldDateFrom[0] : '');
  const [dateTo, setDateTo] = useState(oldDateTo ? oldDateFrom[1] : '');

  const navigation = useNavigate();

  return (
    <div className="calendar">
      <div className="dateFrom">
        <h2>От</h2>
        <input
          type="date"
          onChange={(e) => {
            setDateFrom(e.target.value);
          }}
          value={dateFrom}
        />
      </div>

      <div className="dateTo">
        <h2>До</h2>
        <input
          type="date"
          onChange={(e) => {
            setDateTo(e.target.value);
          }}
          value={dateTo}
        />
      </div>
      <button
        onClick={() => {
          navigation(`dateFrom=${dateFrom}&dateTo=${dateTo}`);
        }}
      >
        Найти
      </button>
      {/* <NavLink to={`dateFrom=${dateFrom}&dateTo=${dateTo}`}>Найти</NavLink> */}
    </div>
  );
};

export default Calendar;
