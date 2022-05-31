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
  return async (dispatch) => {
    const document_1 = await api.createDocument(document);
    return dispatch(addDocument(document_1));
  };
}

export function removeDocument(id) {
  return {
    type: REMOVE_DOCUMENT,
    id,
  };
}

export function handleRemoveDocument(id) {
  return (dispatch) => {
    return api.deleteDocument(id).then(() => dispatch(removeDocument(id)));
  };
}

export function receiveDocumentsList(documents) {
  return {
    type: RECEIVE_DOCUMENTS_LIST,
    documents,
  };
}
