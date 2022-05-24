import * as api from '../../utils/api';

export const ADD_GALLERY = 'ADD_GALLERY';
export const REMOVE_GALLERY = 'REMOVE_GALLERY';
export const RECEIVE_GALLERIES = 'RECEIVE_GALLERIES';

// Add gallery to the store
export function addGallery(gallery) {
  return {
    type: ADD_GALLERY,
    gallery,
  };
}

// Add gallery to the database
export function handleAddGallery(gallery) {
  return (dispatch) => {
    return api.createGallery(gallery).then((data) => {
      dispatch(addGallery(data));
    });
  };
}

// Remove gallery from the store
export function removeGallery(id) {
  return {
    type: REMOVE_GALLERY,
    id,
  };
}

export function handleRemoveGallery(id) {
  return (dispatch) => {
    return api.deleteGallery(id).then(() => {
      dispatch(removeGallery(id));
    });
  };
}

// Get Galleries from store action
export function receiveGalleries(galleries) {
  return {
    type: RECEIVE_GALLERIES,
    galleries,
  };
}
