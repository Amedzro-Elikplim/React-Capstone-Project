const initialState = [
  {
    id: 1, country: 'Ghana', region: 'West Africa', latitude: 5.5571096, longitude: -0.2012376,
  },
  {
    id: 2, country: 'Nigeria', region: 'Africa', latitude: 6.4550575, longitude: 3.3941795,
  },
  {
    id: 3, country: 'UK', region: 'Europe', latitude: 51.5073219, longitude: -0.1276474,
  },
  {
    id: 4, country: 'Kenya', region: 'East Africa', latitude: -1.2832533, longitude: 36.8172449,
  },
  {
    id: 5, country: 'Germany', region: 'Europe', latitude: 52.5170365, longitude: 13.3888599,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
