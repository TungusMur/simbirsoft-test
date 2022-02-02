import { Routes, Route } from 'react-router-dom';
import Competitions from '../Competitions';
import Competition from '../Competition';
import Matches from '../Matches';
import MatchesWithFilter from '../MatchesWithFilter';
// import CompetitionCalendar from '../CompetitionCalendar';
// import CompetionData from '../CompetionData';

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/competitions'} element={<Competitions />} />

      <Route path={'/competitions/id=:id'} element={<Competition />}>
        <Route index element={<Matches />} />
        <Route path={'dateFrom=:date&dateTo=:date'} element={<MatchesWithFilter />} />
      </Route>

      <Route exact path={'/teams'} element={<Competitions />} />
      <Route path={'/teams/id=:id'} element={<Competition />}>
        <Route index element={<Matches />} />
        <Route path={'dateFrom=:date&dateTo=:date'} element={<MatchesWithFilter />} />
      </Route>
    </Routes>
  </div>
);

export default Main;
