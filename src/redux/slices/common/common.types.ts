import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'src/redux/redux-store';

export type AppThunkAction<Action extends AnyAction> = ThunkAction<void, RootState, unknown, Action>;
export type AppAsyncThunkAction<Action extends AnyAction> = ThunkAction<Promise<void>, RootState, unknown, Action>;
