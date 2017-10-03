const initialState = {
  apiData: [],
  currentFirstIndex: 0,
  currentLastIndex: 4
};

export function reducer (state = initialState, action) {
  switch (action.type) {
    case 'AddTopTenSongs':
        return {
          ...state,
          apiData: action.data
        };
    case 'ArrowClickedFirst':
        return {
          ...state,
          currentFirstIndex: action.data
        };
    case 'ArrowClickedLast':
        return {
          ...state,
          currentLastIndex: action.data
        };
    default:
        return state;
  }
}
