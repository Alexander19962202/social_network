import { RootState } from 'src/store/store';

export const appStateIsInitialized = (state: RootState) => state.app.initialized;
