import { INC, DEC } from "../actions/action-constants";

export const incrementAction = () => ({ type: INC });

export const decrementAction = () => ({ type: DEC });
