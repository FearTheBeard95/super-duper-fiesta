import * as queries from '../../graphql/queries';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

//Handler to create a new document
export function createDocument(document) {
  return new Promise(async (res, rej) => {
    await Storage.put(document.name, document.file);
    const file = await Storage.get(document.name);

    const data = await API.graphql(
      graphqlOperation(mutations.createDocument, {
        input: { ...document, file },
      })
    );

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.createDocument);
  });
}

// Handler to delete document
export function deleteDocument(id) {
  return new Promise(async (res, rej) => {
    await Storage.remove(document.name);
    const data = await API.graphql(
      graphqlOperation(mutations.deleteDocument, { input: { id } })
    );

    if (data.errors) {
      rej(data.errors);
    }
    res(data);
  });
}

// Handler to get all documents from API
export function getAllDocuments() {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.listDocuments));

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.listDocuments);
  });
}

//Handler to get a single document from API
export function getDocument(id) {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.getDocument), {
      input: id,
    });

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.getDocument);
  });
}
