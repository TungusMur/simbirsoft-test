import axios from 'axios';

const GET_DATA = 'GET_DATA';

const defaultState = {
  data: {},
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...state, data: { ...payload } };
    default:
      return { ...state };
  }
};
export const getCompetition = () => (dispatch) => {
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
