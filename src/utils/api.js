import * as queries from '../graphql/queries';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';

export async function deleteDocument(id) {
  await Storage.remove(document.name);
  const data = await API.graphql(
    graphqlOperation(mutations.deleteDocument, { input: { id } })
  );

  return data;
}

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

// export async function updateDocument(id) {
//   await Storage.put(document.name, document.file);
//   const file = await Storage.get(document.name);

//   const data = await API.graphql(graphqlOperation(mutations.updateDocument), {
//     input: { id },
//   });

//   return data;
// }

// Handler to get all documents from API
export async function getAllDocuments() {
  return new Promise(async (res, rej) => {
    const data = await API.graphql(graphqlOperation(queries.listDocuments));

    if (data.errors) {
      rej(data.errors);
    }
    res(data.data.listDocuments);
  });
}

//Handler to get a single document from API
export async function getDocument(id) {
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
