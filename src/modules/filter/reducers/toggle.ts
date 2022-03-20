import { createReducer } from 'typesafe-actions';
import { HANDLE_TOGGLE_ON } from '../actions';
import { ToggleAction, ToggleState } from '../types';

const initailState: ToggleState = {
  isConsulting: false,
};

const toggle = createReducer<ToggleState, ToggleAction>(initailState, {
  [HANDLE_TOGGLE_ON]: (state) => ({
    ...state,
    isConsulting: !state.isConsulting,
  }),
});

export default toggle;
