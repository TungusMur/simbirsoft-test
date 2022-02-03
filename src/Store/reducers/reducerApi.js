/* eslint-disable no-unused-vars */
import axios from 'axios';

const GET_COMPETITIONS = 'GET_COMPETITIONS';
const GET_TEAMS = 'GET_TEAMS';
const GET_MATCHES = 'GET_MATCHES';
const GET_DATA_ID = 'GET_DATA_ID';
// const GET_MATCHES_WITH_FILTER = 'GET_MATCHES_WITH_FILTER';

const defaultState = {
  data: { competitions: {}, teams: {} },
  matches: {
    dataMatches: {},
    dataId: {},
  },
  status: 0,
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_COMPETITIONS:
      return { ...state, data: { ...state.data, competitions: { ...payload.data } }, status: payload.status };

    case GET_TEAMS:
      return { ...state, data: { ...state.data, teams: { ...payload.data } }, status: payload.status };

    case GET_MATCHES:
      return {
        ...state,
        matches: { ...state.matches, dataMatches: { ...payload.data } },
        status: payload.status,
      };

    case GET_DATA_ID:
      return {
        ...state,
        matches: { ...state.matches, dataId: { ...payload.dataId } },
      };

    default:
      return { ...state };
  }
};
export const getCompetitions = () => (dispatch) => {
  dispatch({ type: GET_COMPETITIONS, payload: { data: {}, status: 0 } });

  axios
    .get('https://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_COMPETITIONS, payload: { data: data.data, status: 200 } }));
};

export const getTeams = () => (dispatch) => {
  dispatch({ type: GET_TEAMS, payload: { data: {}, status: 0 } });

  axios
    .get(`https://api.football-data.org/v2/teams`, {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((data) => dispatch({ type: GET_TEAMS, payload: { data: data.data, status: 200 } }));
};

export const getDataId = (typematches, id) => (dispatch) => {
  axios
    .get(`https://api.football-data.org/v2/${typematches}`, {
      headers: {
        'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
      },
    })
    .then((dataId) =>
      dispatch({
        type: GET_DATA_ID,
        payload: { dataId: dataId.data[typematches].filter((item) => item.id === Number(id))[0] },
        status: 200,
      })
    );
};

export const getMatches =
  (typematches, id, filter, dateFrom = 0, dateTo = 0) =>
  (dispatch) => {
    dispatch({ type: GET_MATCHES, payload: { data: {}, status: 0 } });

    axios
      .get(
        `https://api.football-data.org/v2/${typematches}/${id}/matches${
          filter ? `?dateFrom=${dateFrom}&dateTo=${dateTo}` : ''
        }`,
        {
          headers: {
            'X-Auth-Token': '1c9fa86f293c45cf8d5cdfda1d7d3d8b',
          },
        }
      )
      .then((data) =>
        dispatch({
          type: GET_MATCHES,
          payload: {
            data: data.data,
            status: 200,
          },
        })
      )
      .catch(() =>
        dispatch({
          type: GET_MATCHES,
          payload: {
            data: {},
            status: 403,
          },
        })
      );
  };
