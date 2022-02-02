import axios from 'axios';

const GET_DATA = 'GET_DATA';
const GET_MATCHES = 'GET_MATCHES';
const GET_MATCHES_WITH_FILTER = 'GET_MATCHES_WITH_FILTER';

const defaultState = {
  data: {},
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...state, data: { ...payload } };
    case GET_MATCHES:
      return { ...state, data: { ...payload } };
    case GET_MATCHES_WITH_FILTER:
      return { ...state, data: { ...payload } };
    default:
      return { ...state };
  }
};
export const getCompetitions = () => (dispatch) => {
  axios
    .get('https://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_DATA, payload: data.data }));
};

// eslint-disable-next-line no-unused-vars
export const getCompetitionCalendar = (dateFrom, dateTo) => (dispatch) => {
  dispatch({ type: GET_DATA, payload: {} });
  axios
    .get(`https://api.football-data.org/v2/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_DATA, payload: data.data }));
};

export const getMatches = (typeMatches, id) => (dispatch) => {
  dispatch({ type: GET_MATCHES, payload: {} });
  axios
    .get(`https://api.football-data.org/v2/${typeMatches}/${id}/matches`, {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_MATCHES, payload: data.data }));
};

export const getMatchesWithFilter = (typeMatches, id, dateFrom, dateTo) => (dispatch) => {
  dispatch({ type: GET_MATCHES_WITH_FILTER, payload: {} });
  axios
    .get(`https://api.football-data.org/v2/${typeMatches}/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`, {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_MATCHES_WITH_FILTER, payload: data.data }));
};
