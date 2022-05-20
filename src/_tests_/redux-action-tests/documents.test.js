import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as documentsAction from '../../redux-store/actions/documents';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const mockServiceCreator =
  (body, succeeds = true) =>
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

describe('documents actions', () => {
  let store;
  const document = {
    abstract: 'test',
    createdAt: '2022-05-18T09:13:49.422Z',
    file: 'https://vivawrokersstorage112828-staging.s3.us-east-1.amazonaws.com/public/test?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA6OUPKSXLMW3L7OOP%2F20220518%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220518T091347Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGdskJdttwsBu4nnQ8OT1l5iDch5CQUZPXSa7kVdgzByAiEA6mO8ASTKGPx95vOw3oxU7EMohHCs2qIHoKbCQL%2BXWB8qzQQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw5OTM1MTE3NzM2NTQiDBfUVY43lGWWU8ymziqhBE%2BYtP6ZjQRUq69Oakhyrkkh3Hq%2BO9caJlOGftbCvTw%2B0FONEpYFH9qPQqtXHRRxvJa4ZDmI99U7nGbxcj9soxUgpnIrg5W54Hk0JwBBhzK986Xp5mpnhvoBdeYjyeCrjW1Yvaibhiq%2BmJ%2FHGqsUPre0OxHT4cZl1hdsYizkbn6SSv8Lt88VHhJdxr%2Bsh9lZeDi0I11ImZOF%2B2xTbob4ZtrZyHtEVzs%2FSXMs4L6GwwW5m%2F435MUAmb%2FUiWnjzQCaGfGNeLNRdIk98rGYOjtItxkFccmr1Lm8DSL0eA0iTmgbFid7tW2gKNNbaot8oMizmvp8TB4fmS%2Bfy%2BWO2TkhEaQTG5uww3%2Bnt0G8Y4MttZMA38gGBsy%2FemmviR5uCofQDJjHZBVn%2FTnoK8ZP%2FtkfXQzGuBiqOuLtWeA%2BQjioKfB8m3NJRT%2FW1Vz89W1K3O8P47W%2BKTVlO5ymUfwiP9OxNjXedsk%2Fcn8mboNKrLLOAeVxCdSGYDc5EhqTOpLoA7tNAVnrYcFR1mHIuz7XFPFw7apjevrPIvqsVm9F7IUvOhtbumo%2BxlMoZPYGXQJnFyF%2BYMxKQ8%2BdkrBrza7jfvM688GTa%2FiMamVW4YJVoRmszB69PXiYRpAwheiMVtJadmf1DqHSEy3wEnWm1TzmYxYnE7nJwCbHZqqTqksjb8KRL%2FeqlGwavC%2B%2BaVUNMgXaVoh9r%2BtmEtgCBonNJPjZxMbhQSP7MMLxkpQGOoUCvL9gMki0lm2X8mA2SiIaOeUjvPNfLY55ZiCtqDFHSRQvAg3HAy7jEsmwK4%2BSjJiDoXCThXQpEaOWeJVlh0a9hKRA7zbHqK78y5uetLHIMzxgUUKAKiLbGTS5iuvDvdcBBODlVBiPSpJinmhG%2FRUF7QkniGUvAt%2BXJc8iZOpbBjKtsyURXRBCmoc2uljFULEh9%2FpCxv1xQ%2BoGMtA8Mvg%2F2wBt%2BN7WWCkY%2BMeme%2FaDvyad1m%2Fy1kwpS1HHgwp2QmnRipoEXC%2FsmrVkXyT0%2BEjtqaRhJTx%2BORBbb82C8LmErTiOx2ddbu%2FWsFtaCFH%2F5VMS2FaSxZwHg1f7Q%2BcwKUPo4REG6GP0&X-Amz-Signature=27f8c8b75ba69224d34dacd5c10f3eed7fa5add20fe0ff1970239443edd493bb&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FmacOS%2F10.15%20lang%2Fjs%20md%2Fbrowser%2FFirefox_101.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.5.2_js&x-id=GetObject',
    id: '26cbd5be-bb85-43ad-84de-06d2cf15c1b3',
    issueDate: '2022-05-19',
    name: 'test',
    type: 'ResearchReports',
    updatedAt: '2022-05-18T09:13:49.422Z',
  };

  const documentsList = [
    {
      name: 'test document',
      abstract: 'test abstract',
      type: 'ResearchReports',
      issueDate: '16-02-1995',
      file: 'url',
    },
    {
      name: 'test document2',
      abstract: 'test abstract',
      type: 'ResearchReports',
      issueDate: '16-02-1995',
      file: 'url2',
    },
  ];

  beforeEach(() => (store = mockStore({ documents: [] })));

  describe('Add new document', () => {
    it('should fire a creat document action', () => {
      store.dispatch(documentsAction.addDocument(document));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          document,
          type: documentsAction.ADD_DOCUMENT,
        })
      );
    });
  });

  describe('Remove document', () => {
    it('should fire a remove document action', () => {
      store.dispatch(documentsAction.removeDocument(document.id));

      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          id: document.id,
          type: documentsAction.REMOVE_DOCUMENT,
        })
      );
    });
  });

  describe('Retrieving documents from store', () => {
    it('should fire a retrieve documents action', () => {
      store.dispatch(
        documentsAction.receiveDocumentsList(
          documentsList,
          mockServiceCreator()
        )
      );
      expect(store.getActions()).toContainEqual(
        expect.objectContaining({
          documents: documentsList,
          type: documentsAction.RECEIVE_DOCUMENTS_LIST,
        })
      );
    });
  });
});
