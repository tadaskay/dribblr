const QUERY_SHOTS = 'shots/QUERY';

const defaultState = {
  page: 0,
  loading: false,
  error: false,
  shots: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${QUERY_SHOTS}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${QUERY_SHOTS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case `${QUERY_SHOTS}_FULFILLED`:
      return {
        ...state,
        shots: action.payload,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
export const fetchMoreShots = () => (dispatch, getState) => {
  const nextPage = getState().shots.page + 1;
  return dispatch({
    type: QUERY_SHOTS,
    payload: {
      promise: fetch(`/api/projects?page=${nextPage}&api_key=`)
        .then(res => res.json())
        .then(res => res.projects.map(p => ({
          title: p.name,
          imageUrl: p.covers['230'],
          author: p.owners.length ? p.owners[0].display_name : '',
        }))),
    },
  });
};

export const selector = state => state.shots;

export default reducer;
