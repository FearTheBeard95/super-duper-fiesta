import { createDocument } from '../../utils/api';

export const RECEIVE_DOCUMENTS = 'RECEIVE_DOCUMENTS';
export const ADD_DOCUMENT = 'ADD_DOCUMENT';

export function addDocument(document) {
  return {
    type: ADD_DOCUMENT,
    document,
  };
}

export function handleAddDocument(document) {
  return (dispatch) => {
    return createDocument(document).then((document) => {
      dispatch(addDocument(document));
    });
  };
}
