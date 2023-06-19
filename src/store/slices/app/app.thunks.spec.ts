import { getAuthUserData } from '../auth/auth.thunks';
import { initializeApp } from './app.thunks';
import { appInitialized } from './app.slice';
import clearAllMocks = jest.clearAllMocks;

jest.mock('src/store/slices/auth/auth.thunks');

describe('App Thunks', () => {
  const dispatchMock = jest.fn();
  const getState = jest.fn();
  const getAuthUserDataMockFn = getAuthUserData as jest.MockedFn<any>;

  beforeEach(() => {
    clearAllMocks();
  });

  describe('App Thunk - initializeApp', () => {
    it('should call another getAuthUserData-thunk then dispatch InitializedSuccess Action', async () => {
      const thunk = initializeApp();
      const getAuthUserDataReturnData = { initialized: true };
      getAuthUserDataMockFn.mockReturnValue(getAuthUserDataReturnData);
      const initializedAction = appInitialized();
      await thunk(dispatchMock, getState, {});

      expect(dispatchMock).toBeCalledTimes(2);
      expect(dispatchMock).toBeCalledWith(getAuthUserDataReturnData);
      expect(dispatchMock).toBeCalledWith(initializedAction);
    });
  });
});
