import * as DocumentService from './utils/api';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

jest.setTimeout(20000);

describe('Document service unit test', function () {
  describe('Create document functionality', function () {
    it('Should successfully create a document', async function () {
      const file = {
        uid: 'rc-upload-1652864573269-7',
        name: 'test.pdf',
        lastModified: 1652718470555,
        webkitRelativePath: '',
        size: 641968,
        type: 'application/pdf',
      };

      const document = {
        name: 'test document',
        abstract: 'test abstract',
        type: 'ResearchReports',
        issueDate: '16-02-1995',
        file: 'file',
      };

      // const { data } = await DocumentService.createDocument(document);

      // expect(data.data.createDocument.name).toEqual('test document');
      // expect(data.data.createDocument.abstract).toEqual('test abstract');
      // expect(data.data.createDocument.type).toEqual('ResearchReports');
      // expect(data.data.createDocument.issueDate).toEqual('16-02-1995');
      // expect(data.data.createDocument.file).not.toBeNull();
    });
  });

  describe('delete document functionality', function () {
    it('Should successfully delete document', function () {});
  });

  describe('get documents functionality', function () {
    it('Should successfully retrieve all documents', function () {});
  });

  describe('get document functionality', function () {
    it('Should successfully create a document', function () {});
  });
});
