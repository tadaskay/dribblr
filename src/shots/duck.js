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
        shots: state.shots.concat(action.payload),
        page: state.page + 1,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

const fetchMoreShots = () => (dispatch, getState) => {
  const nextPage = getState().shots.page + 1;
  return dispatch({
    type: QUERY_SHOTS,
    payload: {
      promise: fetch(`/api/projects?page=${nextPage}&api_key=`)
        .then(handleErrors)
        .then(res => res.json())
        .then(res => (res.projects || []).map(p => ({
          id: p.id,
          title: p.name,
          imageUrl: p.covers['230'],
          author: p.owners.length ? p.owners[0].display_name : '',
        }))),
    },
  });
};

export const actions = ({ fetchMoreShots });
export const selector = state => state.shots;

export default reducer;
