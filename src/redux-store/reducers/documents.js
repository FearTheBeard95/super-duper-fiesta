import { RECEIVE_DOCUMENTS_LIST } from '../actions/documents';

export default function documents(state = [], action) {
  switch (action.type) {
    case RECEIVE_DOCUMENTS_LIST:
      return [...action.documents];
    default:
      return state;
  }
}
