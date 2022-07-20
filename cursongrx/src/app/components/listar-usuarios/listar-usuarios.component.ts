import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { usuarioModel } from 'src/app/models/usuario';
import { AppState } from 'src/app/Store/app.state';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions'
import * as fromUsuariosSelector from 'src/app/Store/usuarios/usuarios.selector'

@Component({
  selector: 'app-listar-usuarios',  
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  //listaUsuarios: usuarioModel[] = [];

  listaUsuarios$ : Observable<usuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios) ;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.store.dispatch(fromUsuariosAction.LoadUsuarios());

    /* this.usuarioService.getUsuarios().subscribe((usuarios: usuarioModel[]) => {
      this.listaUsuarios = usuarios;
    }); */
  }
}
