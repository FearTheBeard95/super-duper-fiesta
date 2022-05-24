import { combineReducers } from 'redux';
import documents from './documents';
import photos from './photos';
import galleries from './galleries';

export default combineReducers({ documents, photos, galleries });
