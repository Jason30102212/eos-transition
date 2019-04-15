import isEmpty from '../validation/is-empty';

import {SET_CURRENT_CONTENT} from '../actions/types';

const initialState = {
  currentContent: 'home'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        currentContent: action.payload
      }
    default:
      return state;
  }
}
