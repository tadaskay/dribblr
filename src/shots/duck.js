const QUERY_SHOTS = 'shots/QUERY';
const TOGGLE_FAVORITE = 'shots/TOGGLE_FAVORITE';

const defaultState = {
  page: 0,
  loading: false,
  error: false,
  shots: [],
  favorites: new Set(),
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
    case TOGGLE_FAVORITE: {
      const shotId = action.payload;
      const isFavorite = state.favorites.has(shotId);

      let nextFavorites;
      if (isFavorite) {
        nextFavorites = new Set([...state.favorites]);
        nextFavorites.delete(shotId);
      } else {
        nextFavorites = new Set([...state.favorites].concat(action.payload));
      }

      return { ...state, favorites: nextFavorites };
    }
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
      promise: fetch(`/api/projects?page=${nextPage}`)
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

const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});

export const actions = ({ fetchMoreShots, toggleFavorite });
export const selector = state => state.shots;

export default reducer;
