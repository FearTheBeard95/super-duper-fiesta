import { combineReducers } from 'redux';
import documents from './documents';
import photos from './photos';
import galleries from './galleries';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  documents,
  photos,
  galleries,
  loadingBar: loadingBarReducer,
});
