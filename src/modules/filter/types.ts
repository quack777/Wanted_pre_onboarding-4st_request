import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type FilterAction = ActionType<typeof actions>;
export type ToggleAction = ActionType<typeof actions>;

export type Filter = {
  method: Array<string>;
  material: Array<string>;
};

export type ToggleState = {
  isConsulting: boolean;
};
