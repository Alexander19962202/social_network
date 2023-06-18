export type AppState = {
  initialized: boolean;
  globalError: string;
};

export const initialState: AppState = {
  initialized: false,
  globalError: '',
};
