const QUERY_SHOTS = 'shots/QUERY';

const defaultState = {
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
      };
    default:
      return state;
  }
};
export const queryShots = () => ({
  type: QUERY_SHOTS,
  payload: fetch('/api/projects?api_key=', {
  }).then(res => res.json())
    .then(res => res.projects.map(p => ({
      title: p.name,
      imageUrl: p.covers['230'],
      author: p.owners.length ? p.owners[0].display_name : '',
    }))),
});

export const selector = state => state.shots;

export default reducer;
