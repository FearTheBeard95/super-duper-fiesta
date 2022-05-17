import * as queries from '../graphql/queries';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
export async function createDocument(document) {
  await Storage.put(document.name, document.file);
  const file = await Storage.get(document.name);

  const data = await API.graphql(
    graphqlOperation(mutations.createDocument, { input: { ...document, file } })
  );

  return data;
}

export async function deleteDocument(id) {
  await Storage.remove(document.name);
  const data = await API.graphql(
    graphqlOperation(mutations.deleteDocument, { input: { id } })
  );

  return data;
}

// export async function updateDocument(id) {
//   await Storage.put(document.name, document.file);
//   const file = await Storage.get(document.name);

//   const data = await API.graphql(graphqlOperation(mutations.updateDocument), {
//     input: { id },
//   });

//   return data;
// }

export async function getAllDocuments() {
  const data = await API.graphql(graphqlOperation(queries.listDocuments));

  return data;
}

export async function getDocument(id) {
  const data = await API.graphql(graphqlOperation(queries.getDocument), {
    input: id,
  });

  return data;
}
