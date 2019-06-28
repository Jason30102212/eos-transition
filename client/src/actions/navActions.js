import { SET_CURRENT_CONTENT } from './types';

export const setContent = (content) => {
  return {
    type: SET_CURRENT_CONTENT,
    payload: content
  }
}
