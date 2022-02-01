import { Routes, Route } from 'react-router-dom';
import Competition from '../Competition/Competition';
import CompetitionCalendar from '../CompetitionCalendar';
import CompetionData from '../CompetionData';

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<Competition />} />
      <Route path={'/competitionCalendar'} element={<CompetitionCalendar />}>
        <Route path={'dateFrom=:date&dateTo=:date'} element={<CompetionData />} />
        <Route path="*" element={<h1>ZXVZXVZXV</h1>} />
      </Route>
    </Routes>
  </div>
);

export default Main;
