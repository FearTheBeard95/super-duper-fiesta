import * as queries from '../../graphql/queries';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

//Handler to add a new photo
export function addPhoto(photo) {
  return new Promise(async (res, rej) => {
    await Storage.put(photo.name, photo.file);

    const photoURL = await Storage.get(photo.name);
    const data = await API.graphql(graphqlOperation(mutations.createPhoto), {
      input: { ...photo, file: photoURL },
    });

    if (data.errors) {
      rej(data.errors);
    }

    res(data.data.createPhoto);
  });
}

// Handler to delete photo
export function deletePhoto(id) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(mutations.deletePhoto), {
      input: { id },
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data);
  });
}

// Handler to get all photos
export function getAllPhotos() {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.listPhotos));

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.listPhotos.items);
  });
}

//Handler to get a single photo
export function getPhoto(id) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.getPhoto), {
      input: { id },
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data);
  });
}
