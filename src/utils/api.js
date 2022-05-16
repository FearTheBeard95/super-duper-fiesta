import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';

export async function createDocument(document) {
  await Storage.put(document.name, document.file);
  const file = await Storage.get(document.name);

  const data = await API.graphql(
    graphqlOperation(mutations.createDocument, { input: { ...document, file } })
  );

  return data;
}
