import { getAllDocuments } from './document-handler';
import { getGalleries } from './gallery-handler';
import { getAllPhotos } from './photo-handler';

export * from './document-handler';
export * from './gallery-handler';
export * from './photo-handler';

export async function getInitialData() {
  const [documents, galleries, photos] = await Promise.all([
    getAllDocuments(),
    getGalleries(),
    getAllPhotos(),
  ]);
  return {
    documents,
    galleries,
    photos,
  };
}
