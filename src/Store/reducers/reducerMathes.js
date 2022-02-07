import axios from 'axios';

const GET_MATCHES = 'GET_MATCHES';
const DELETE_MATCHES = 'DELETE_MATCHES';
const GET_DATA_ID = 'GET_DATA_ID';
const LOADING_MATCHES_OR_ID = 'LOADING_MATCHES_OR_ID';

const defaultState = {
  dataMatches: {},
  statusMatches: 0,
  dataId: {},
  statusId: 0,
};

// eslint-disable-next-line default-param-last
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_MATCHES:
      return {
        ...state,
        dataMatches: { ...payload.data },
        statusMatches: payload.status,
      };
    case LOADING_MATCHES_OR_ID:
      return {
        ...state,
        ...payload,
      };
    case GET_DATA_ID:
      return {
        ...state,
        dataId: { ...payload.data },
        statusId: payload.status,
      };
    case DELETE_MATCHES:
      return {
        ...state,
        ...payload,
      };
    default:
      return { ...state };
  }
};

export const getDataId = (typematches, id) => (dispatch) => {
  dispatch({
    type: LOADING_MATCHES_OR_ID,
    payload: {
      dataId: {},
      statusId: 0,
    },
  });

  axios
    .get(`https://api.football-data.org/v2/${typematches}`, {
      headers: {
        'X-Auth-Token': process.env.REACT_APP_AUTH_TOKEN,
      },
    })
    .then((dataId) =>
      dispatch({
        type: GET_DATA_ID,
        payload: { data: dataId.data[typematches].filter((item) => item.id === Number(id))[0], status: 200 },
      })
    );
};

export const getMatches =
  (typematches, id, filter = false, dateFrom = 0, dateTo = 0) =>
  (dispatch) => {
    dispatch({
      type: LOADING_MATCHES_OR_ID,
      payload: {
        dataMatches: {},
        statusMatches: 0,
      },
    });

    axios
      .get(
        `https://api.football-data.org/v2/${typematches}/${id}/matches${
          filter ? `?dateFrom=${dateFrom}&dateTo=${dateTo}` : ''
        }`,
        {
          headers: {
            'X-Auth-Token': process.env.REACT_APP_AUTH_TOKEN,
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

export const deleteMatches = () => (dispatch) => {
  dispatch({
    type: DELETE_MATCHES,
    payload: {
      dataMatches: {},
      statusMatches: 0,
      dataId: {},
      statusId: 0,
      status: 0,
    },
  });
};
