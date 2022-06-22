import { act } from 'react-dom/test-utils';
import { DISPLAY } from './ActionCreators';

const initialState = [
  { country: 'Ghana', region: 'West Africa' },
  { country: 'Ghana', region: 'West Africa' },
  { country: 'Ghana', region: 'West Africa' },
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_COUNTRIES':
      return initialState;
    default:
      return state;
  }
};
