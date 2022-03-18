import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ADD_MATERIAL, CLEAR_METHOD, DELETE_MATERIAL } from '../actions';
import { MaterialAction, Material } from '../types';

const initailState: Material = {
  material: [],
};

const material = createReducer<Material, MaterialAction>(initailState, {
  [ADD_MATERIAL]: (state, action) =>
    produce(state, (draft) => {
      draft.material.push(action.payload.material);
    }),
  [DELETE_MATERIAL]: (state, action) => ({
    ...state,
    material: state.material.filter((material) => material !== action.payload.material),
  }),
  [CLEAR_METHOD]: (state, action) => ({
    ...state,
    material: [],
  }),
});

export default material;
