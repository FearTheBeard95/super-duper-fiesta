import { RECEIVE_GALLERIES } from '../actions/galleries';

export default function galleries(state = [], action) {
  switch (action.type) {
    case RECEIVE_GALLERIES:
      return [...action.galleries];
    default:
      return state;
  }
}
