import { RECEIVE_PHOTOS_LIST } from '../actions/photos';

export default function photos(state = [], action) {
  switch (action.type) {
    case RECEIVE_PHOTOS_LIST:
      return [...action.photos];
    default:
      return state;
  }
}
