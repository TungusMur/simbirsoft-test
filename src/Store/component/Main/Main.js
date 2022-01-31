import { Routes, Route } from 'react-router-dom';
import Data from '../Data/Data';
import CompetitionCalendar from '../CompetitionCalendar';

const Main = () => (
  <div className="main">
    <Routes>
      <Route exact path={'/'} element={<Data />} />
      <Route path={'/matches'} element={<CompetitionCalendar />} />
    </Routes>
  </div>
);

export default Main;
