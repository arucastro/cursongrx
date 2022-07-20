import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { usuarioModel } from 'src/app/models/usuario';
import * as fromUsuariosAction from 'src/app/Store/usuarios/usuarios.actions'
import { AppState } from 'src/app/Store/app.state';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: usuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addUsuario() {
    if (this.model.id == 0) {
      //cadastra
      this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}))
    } else {
      //atualiza
      this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload: this.model}))
    }
  }
}
