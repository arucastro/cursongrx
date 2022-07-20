import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filter } from 'rxjs';
import { UsuariosState } from './usuarios.reducer';

const getUsuarioFeatureState = createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
  getUsuarioFeatureState,
  (state: UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
  getUsuarioFeatureState,
  (state: UsuariosState) => state.usuario
);

export const getUsuarioErorr = createSelector(
  getUsuarioFeatureState,
  (state: UsuariosState) => state.error
);

export const getUsuariosEsper = createSelector(
  getUsuarioFeatureState,
  (state: UsuariosState) =>
    state.usuarios.filter((filter) => filter.perfil == 'Esper')
);
