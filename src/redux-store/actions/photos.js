import * as api from '../../utils/api';

export const ADD_PHOTO = 'ADD_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const RECEIVE_PHOTOS_LIST = 'RECEIVE_PHOTOS_LIST';

//Action to add photo to store
export function addPhoto(photo) {
  return {
    type: ADD_PHOTO,
    photo,
  };
}

//Action to add photo to storage and database
export function handleAddPhoto(photo) {
  return (dispatch) => {
    return api.addPhoto(photo).then((data) => {
      dispatch(addPhoto(data));
    });
  };
}

// Action to  remove photo from store
export function deletePhoto(id) {
  return {
    type: DELETE_PHOTO,
    id,
  };
}

// Action to remove photo from storage and database
export function handleRemovePhoto(id) {
  return (dispatch) => {
    return api.deletePhoto(id).then((data) => {
      dispatch(deletePhoto(id));
    });
  };
}

// Action to get all photos
export function getPhotos(photos) {
  return {
    type: RECEIVE_PHOTOS_LIST,
    photos,
  };
}

// Action to get all photos from storage and database
export function handleGetPhotos() {
  return (dispatch) => {
    return api.getAllPhotos().then((photos) => {
      dispatch(getPhotos(photos));
    });
  };
}
