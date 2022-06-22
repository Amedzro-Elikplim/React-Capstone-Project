const initialState = [
  { id: 1, country: 'Ghana', region: 'West Africa' },
  { id: 2, country: 'Ghana', region: 'West Africa' },
  { id: 3, country: 'Ghana', region: 'West Africa' },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_COUNTRIES':
      return initialState;
    default:
      return state;
  }
};

export default reducer;
