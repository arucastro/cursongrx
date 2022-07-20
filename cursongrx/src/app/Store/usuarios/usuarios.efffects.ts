import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { usuarioService } from 'src/app/repositories/usuarioService';
import * as fromUsuariosAction from '../usuarios/usuarios.actions';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: usuarioService
  ) {}

  //Roda quando é disparada ação loadUsuarios
  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIOS),
      exhaustMap(() =>
        //chama o metodo getUsuarios e transforma em observable
        this.usuarioService.getUsuarios().pipe(
          //pega o valor retornado e retorna ação de sucesso
          map(
            (payload) => fromUsuariosAction.LoadUsuariosSuccess({ payload }),
            //ou se algo der errado, retorna ação de falha
            catchError((error) =>
              of(fromUsuariosAction.LoadUsuariosFail({ error }))
            )
          )
        )
      )
    )
  );


  //roda quando é disparada ação loadUsuario
  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.LOAD_USUARIO),
      exhaustMap((record:any) =>
        //chama o metodo getUsuario e transforma em observable
        this.usuarioService.getUsuario(record.payload).pipe(
          //pega o valor retornado e retorna ação de sucesso
          map(
            (payload) => fromUsuariosAction.LoadUsuarioSuccess({ payload }),
            //ou se algo der errado, retorna ação de falha
            catchError((error) =>
              of(fromUsuariosAction.LoadUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.CREATE_USUARIO),
      exhaustMap((record:any) =>
        this.usuarioService.addUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuariosAction.CreateUsuarioSuccess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.CreateUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.UPDATE_USUARIO),
      exhaustMap((record:any) =>
        this.usuarioService.updateUsuario(record.payload).pipe(
          map(
            (payload) => fromUsuariosAction.UpdateUsuarioSuccess({ payload }),
            catchError((error) =>
              of(fromUsuariosAction.UpdateUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeActions.DELETE_USUARIO),
      exhaustMap((record:any) =>
        this.usuarioService.deleteUsuario(record.payload).pipe(
          map(
            () => fromUsuariosAction.DeleteUsuarioSuccess({ payload: record.payload }),
            catchError((error) =>
              of(fromUsuariosAction.DeleteUsuarioFail({ error }))
            )
          )
        )
      )
    )
  );
}


