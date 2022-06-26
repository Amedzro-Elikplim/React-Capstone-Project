const initialState = [
  {
    id: 1, country: 'Ghana', region: 'West Africa', latitude: 5.5571096, longitude: -0.2012376,
  },
  { id: 2, country: 'Nigeria', region: 'West Africa' },
  { id: 3, country: 'UK', region: 'Europe' },
  { id: 4, country: 'New your', region: 'USA' },
  { id: 5, country: 'Germany', region: 'Europe' },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
