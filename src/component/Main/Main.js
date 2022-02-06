import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCompetitions, getTeams } from '../../Store/reducers/reducerApi';
import Competitions from '../Competitions';
import Competition from '../Competition';
import Teams from '../Teams';
import Team from '../Team';
import Matches from '../Matches';
import Search from '../Search';
import './Main.scss';

// eslint-disable-next-line no-shadow
const Main = ({ getCompetitions, getTeams }) => {
  useEffect(() => {
    getCompetitions();
    getTeams();
  }, []);

  return (
    <div className="main">
      <Routes>
        <Route exact path={'/'} element={<h1>Home</h1>} />

        <Route exact path={'/competitions'} element={<Competitions />}>
          <Route index element={<Search type={'competitions'} />} />
          <Route exact path={'search=:search'} element={<Search type={'competitions'} />} />
          <Route path={'*'} element={<h1>403</h1>} />
        </Route>

        <Route exact path={'/competitions/id=:id'} element={<Competition />}>
          <Route index element={<Matches type="competitions" />} />
          <Route exact path={'dateFrom=:date&dateTo=:date'} element={<Matches type="competitions" filter={true} />} />
        </Route>

        <Route exact path={'/teams'} element={<Teams />}>
          <Route index element={<Search type={'teams'} />} />
          <Route exact path={'search=:search'} element={<Search type={'teams'} />} />
          <Route path={'*'} element={<h1>403</h1>} />
        </Route>

        <Route exact path={'/teams/id=:id'} element={<Team />}>
          <Route index element={<Matches type="teams" />} />
          <Route exact path={'dateFrom=:date&dateTo=:date'} element={<Matches type="teams" filter={true} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default connect(null, { getCompetitions, getTeams })(Main);
