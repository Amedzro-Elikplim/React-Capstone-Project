const initialState = [
  { country: 'Ghana', region: 'West Africa' },
  { country: 'Ghana', region: 'West Africa' },
  { country: 'Ghana', region: 'West Africa' },
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
