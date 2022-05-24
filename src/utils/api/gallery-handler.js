import * as queries from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

//Handler to create a new gallery
export function createGallery(gallery) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(mutations.createGallery), {
      input: { ...gallery },
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.createGallery);
  });
}

//Handler to delete gallery
export function deleteGallery(id) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(mutations.deleteGallery), {
      input: { id },
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data);
  });
}

// Handeler to get all galleries
export function getGalleries() {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.listGalleries));

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.listGalleries.items);
  });
}

//Handler to get a gallery by id
export function getGallery(id) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.getGallery), {
      input: { id },
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.getGallery);
  });
}
