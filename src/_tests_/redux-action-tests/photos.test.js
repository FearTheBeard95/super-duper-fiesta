import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as photosActions from '../../redux-store/actions/photos';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator =
  (body, succeeds = true) =>
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

describe('Photos actions', () => {
  let store;
  const photo = {};
  const photos = [{}];

  beforeEach(() => (store = mockStore({ photos: [] })));

  describe('Add new photos action', () => {
    it('should fire an add photo action', () => {
      store.dispatch(photosActions.addPhoto(photo));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({ photo, type: photosActions.ADD_PHOTO })
      );
    });
  });

  describe('Remove photo action', () => {
    it('should fire a remove photo action', () => {
      store.dispatch(photosActions.deletePhoto(photo.id));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          id: photo.id,
          type: photosActions.DELETE_PHOTO,
        })
      );
    });
  });

  describe('Get photos action', () => {
    it('should fire a get photos action', () => {
      store.dispatch(photosActions.getPhotos(photos));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          photos,
          type: photosActions.RECEIVE_PHOTOS_LIST,
        })
      );
    });
  });
});
