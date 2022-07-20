import { createAction, props } from '@ngrx/store';
import { usuarioModel } from 'src/app/models/usuario';

export const enum usuariosTypeActions {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
  CREATE_USUARIO_SUCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
  CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

  UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
  UPDATE_USUARIO_SUCESS = '[UPDATE_USUARIO_SUCESS] UPDATE USUARIO SUCCESS',
  UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',

  DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
  DELETE_USUARIO_SUCESS = '[DELETE_USUARIO_SUCESS] DELETE USUARIO SUCCESS',
  DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

//Load Usuarios
export const LoadUsuarios = createAction(usuariosTypeActions.LOAD_USUARIOS);

export const LoadUsuariosSuccess = createAction(
  usuariosTypeActions.LOAD_USUARIOS_SUCESS,
  props<{ payload: usuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
  usuariosTypeActions.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

//Load Usuario
export const LoadUsuario = createAction(
  usuariosTypeActions.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
  usuariosTypeActions.LOAD_USUARIO_SUCESS,
  props<{ payload: usuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  usuariosTypeActions.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

//Create Usuario
export const CreateUsuario = createAction(
  usuariosTypeActions.CREATE_USUARIO,
  props<{ payload: usuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  usuariosTypeActions.CREATE_USUARIO_SUCESS,
  props<{ payload: usuarioModel }>()
);

export const CreateUsuarioFail = createAction(
  usuariosTypeActions.CREATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Update Usuario
export const UpdateUsuario = createAction(
  usuariosTypeActions.UPDATE_USUARIO,
  props<{ payload: usuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
  usuariosTypeActions.UPDATE_USUARIO_SUCESS,
  props<{ payload: usuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
  usuariosTypeActions.UPDATE_USUARIO_FAIL,
  props<{ error: string }>()
);

//Delete Usuario
export const DeleteUsuario = createAction(
  usuariosTypeActions.DELETE_USUARIO,
  props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
  usuariosTypeActions.DELETE_USUARIO_SUCESS,
  props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
  usuariosTypeActions.DELETE_USUARIO_FAIL,
  props<{ error: string }>()
);
