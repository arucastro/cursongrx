import { Action, createReducer, on } from '@ngrx/store';
import { usuarioModel } from 'src/app/models/usuario';
import * as fromUsuariosAction from '../usuarios/usuarios.actions';

export interface UsuariosState {
  usuarios: usuarioModel[];
  usuario: usuarioModel | null;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

const _usuariosReducer = createReducer(
  initialState,
  //Load Usuarios
  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //Load Usuario
  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),
  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //Create Usuario
  on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),
  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //Update Usuario
  on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id == payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),
  on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  //Delete Usuario
  on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
    error: '',
  })),
  on(fromUsuariosAction.DeleteUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

export function usuariosReducer(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}
