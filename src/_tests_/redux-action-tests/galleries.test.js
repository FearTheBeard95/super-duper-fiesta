import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as galleriesActions from '../../redux-store/actions/galleries';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('Galleries actions', () => {
  let store;
  const gallery = {};
  const galleries = {};

  beforeEach(() => (store = mockStore({ galleries: [] })));

  describe('Add gallery action', () => {
    it('should fire an add gallery action', () => {
      store.dispatch(galleriesActions.addGallery(gallery));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({ gallery, type: galleriesActions.ADD_GALLERY })
      );
    });
  });

  describe('Remove gallery action', () => {
    it('should fire a remove gallery action', () => {
      store.dispatch(galleriesActions.removeGallery(gallery.id));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          id: gallery.id,
          type: galleriesActions.REMOVE_GALLERY,
        })
      );
    });
  });

  describe('Receive galleries action', () => {
    it('should fire a get galleries action', () => {
      store.dispatch(galleriesActions.receiveGalleries(galleries));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          galleries,
          type: galleriesActions.RECEIVE_GALLERIES,
        })
      );
    });
  });
});
