import { ADD_DOCUMENT } from '../actions/documents';

export default function documents(state = [], action) {
  switch (action.type) {
    case ADD_DOCUMENT:
      return [...state, action.document];
    default:
      return state;
  }
}
