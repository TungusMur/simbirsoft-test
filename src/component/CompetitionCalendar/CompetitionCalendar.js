import { Outlet } from 'react-router';
import Calendar from '../../common/Calendar';

const CompetitionCalendar = () => {
  return (
    <div className="competitionCalendar">
      <Calendar
        oldDateFrom={document.location.href.match(/\d+-\d+-\d+/g) || false}
        oldDateTo={document.location.href.match(/\d+-\d+-\d+/g) || false}
      />
      <Outlet />
    </div>
  );
};

export default CompetitionCalendar;
