import {
  RECEIVE_DOCUMENTS_LIST,
  ADD_DOCUMENT,
  REMOVE_DOCUMENT,
} from '../actions/documents';

export default function documents(state = [], action) {
  switch (action.type) {
    case RECEIVE_DOCUMENTS_LIST:
      return [...action.documents];
    case ADD_DOCUMENT:
      return state.concat(action.document);
    case REMOVE_DOCUMENT:
      return state.filter(({ id }) => action.id !== id);
    default:
      return state;
  }
}
