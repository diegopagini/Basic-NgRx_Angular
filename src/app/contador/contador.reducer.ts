import { Action, createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  incrementar,
  multiplicar,
} from './contador.actions';

// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const initialState = 10;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, props) => state * props.number),
  // on(multiplicar, (state, { numero }) => state * number)
  on(dividir, (state, props) => state / props.number)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
