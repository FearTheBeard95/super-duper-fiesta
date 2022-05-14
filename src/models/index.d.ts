import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Document {
  readonly id: string;
  readonly name?: string | null;
  readonly abstract: string;
  readonly type?: string | null;
  readonly issueDate: string;
  readonly file?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Document, DocumentMetaData>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document, DocumentMetaData>) => MutableModel<Document, DocumentMetaData> | void): Document;
}