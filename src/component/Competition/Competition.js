import { Outlet } from 'react-router';
import Calendar from '../../common/Calendar';

// eslint-disable-next-line no-shadow
const Competition = () => {
  return (
    <div className="competition">
      <Calendar
        oldDateFrom={document.location.href.match(/\d+-\d+-\d+/g) || false}
        oldDateTo={document.location.href.match(/\d+-\d+-\d+/g) || false}
      />
      <Outlet />
    </div>
  );
};

export default Competition;
