import {initializeApp, resetGlobalError} from "src/redux/reducers/app/app.thunks";
import {initializedSuccessAC, setGlobalErrorAC} from "./app.action-creators";
import {getAuthUserData} from "src/redux/reducers/auth/auth.thunks";

jest.mock("src/redux/reducers/auth/auth.thunks")

describe('App Thunks', () => {
  const dispatchMock = jest.fn();
  const getState = jest.fn();
  const getAuthUserDataMockFn = getAuthUserData as jest.MockedFn<any>

  beforeEach(() => {
    //clearAllMocks();
  })

  describe('App Thunk - resetGlobalError', () => {
    it('should dispatch SetGlobalError Action with empty string', () => {
      const thunk = resetGlobalError();
      const action = setGlobalErrorAC('');

      thunk(dispatchMock, getState, {});

      expect(dispatchMock).toBeCalledTimes(1);
      expect(dispatchMock).toBeCalledWith(action);
    });
  });

  describe('App Thunk - initializeApp', () => {
    it('should call another getAuthUserData-thunk then dispatch InitializedSuccess Action', async () => {
      const thunk = initializeApp();
      const getAuthUserDataReturnData = { initialized: true }
      getAuthUserDataMockFn.mockReturnValue(getAuthUserDataReturnData)
      const initializedAction = initializedSuccessAC();
      await thunk(dispatchMock, getState, {});

      expect(dispatchMock).toBeCalledTimes(2);
      expect(dispatchMock).toBeCalledWith(getAuthUserDataReturnData);
      expect(dispatchMock).toBeCalledWith(initializedAction);
    })
  })
})
