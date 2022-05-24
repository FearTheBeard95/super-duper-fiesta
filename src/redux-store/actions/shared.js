import { getInitialData } from '../../utils/api';
import { receiveDocumentsList } from './documents';
import { receiveGalleries } from './galleries';
import { receivePhotos } from './photos';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function handleReceiveData() {
  return async (dispatch) => {
    const { documents, galleries, photos } = await getInitialData();
    dispatch(receiveDocumentsList(documents));
    dispatch(receiveGalleries(galleries));
    dispatch(receivePhotos(photos));
  };
}
