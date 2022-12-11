import {Dispatch} from "react";

export type Thunk<Action> = (dispatch: Dispatch<Action>) => Promise<void>
