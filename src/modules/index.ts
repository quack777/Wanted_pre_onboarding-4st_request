import { combineReducers } from 'redux';
import filter from './filter/reducers/filter';
import toggle from './filter/reducers/toggle';
import { Filter, ToggleState } from './filter/types';

export type RootState = {
  filter: Filter;
  toggle: ToggleState;
};

const rootReducer = combineReducers({
  filter,
  toggle,
});

export default rootReducer;
