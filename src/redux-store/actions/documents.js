import * as api from '../../utils/api';

export const ADD_DOCUMENT = 'ADD_DOCUMENT';
export const REMOVE_DOCUMENT = 'REMOVE_DOCUMENT';
export const RECEIVE_DOCUMENTS_LIST = 'RECEIVE_DOCUMENTS_LIST';
export const RECEIVE_DOCUMENT = 'RECEIVE_DOCUMENT';

export function addDocument(document) {
  return {
    type: ADD_DOCUMENT,
    document,
  };
}

export function handleAddDocument(document) {
  return (dispatch) => {
    return api.createDocument(document).then((document) => {
      dispatch(addDocument(document));
    });
  };
}

export function removeDocument(id) {
  return {
    type: REMOVE_DOCUMENT,
    id,
  };
}

export function handleRemoveDocument(id) {
  return async (dispatch) => {
    dispatch(removeDocument(id));
    return await api.deleteDocument(id);
  };
}

export function receiveDocumentsList(documents) {
  return {
    type: RECEIVE_DOCUMENTS_LIST,
    documents,
  };
}
