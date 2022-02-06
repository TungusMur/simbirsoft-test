/* eslint-disable no-unused-vars */
import axios from 'axios';

const GET_COMPETITIONS = 'GET_COMPETITIONS';
const GET_TEAMS = 'GET_TEAMS';
const LOADING_COMPETITIONS_OR_TEAMS = 'LOADING_COMPETITIONS_OR_TEAMS';
// const GET_MATCHES_WITH_FILTER = 'GET_MATCHES_WITH_FILTER';

const defaultState = {
  competitions: {},
  statusCompetitions: 0,
  teams: {},
  statusTeams: 0,
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_COMPETITIONS:
      return { ...state, competitions: { ...payload.data }, statusCompetitions: payload.status };

    case GET_TEAMS:
      return { ...state, teams: { ...payload.data }, statusTeams: payload.status };

    case LOADING_COMPETITIONS_OR_TEAMS:
      return {
        ...state,
        ...payload,
      };

    default:
      return { ...state };
  }
};
export const getCompetitions = () => (dispatch) => {
  dispatch({ type: LOADING_COMPETITIONS_OR_TEAMS, payload: { competitions: {}, statusCompetitions: 0 } });

  axios
    .get('https://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_AUTH_TOKEN,
      },
    })
    .then((data) => dispatch({ type: GET_COMPETITIONS, payload: { data: data.data, status: 200 } }));
};

export const getTeams = () => (dispatch) => {
  dispatch({ type: LOADING_COMPETITIONS_OR_TEAMS, payload: { teams: {}, statusTeams: 0 } });

  axios
    .get(`https://api.football-data.org/v2/teams`, {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_AUTH_TOKEN,
      },
    })
    .then((data) => dispatch({ type: GET_TEAMS, payload: { data: data.data, status: 200 } }));
};
