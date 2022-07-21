import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { usuarioModel } from 'src/app/models/usuario';
import { AppState } from 'src/app/Store/app.state';
import * as fromUsuariosSelector from 'src/app/Store/usuarios/usuarios.selector';

@Component({
  selector: 'app-lista-usuarios-spy',
  templateUrl: './lista-usuarios-spy.component.html',
  styleUrls: ['./lista-usuarios-spy.component.scss'],
})
export class ListaUsuariosSpyComponent implements OnInit {
  //jeito 1
  listaUsuariosSpy$: Observable<usuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuariosSpy
  );

  //jeito 2
  listaUsuariosSpy2: usuarioModel[] = [];

  //jeito 3
  listaUsuariosSpy3: usuarioModel[] = [];

  //jeito 4
  listaUsuariosSpy4: usuarioModel[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //jeito 2
    this.store
      .select(fromUsuariosSelector.getUsuariosSpy)
      .subscribe((usuarios: usuarioModel[]) => {
        this.listaUsuariosSpy2 = usuarios;
      });

      //jeito 3
    this.store
    .select(fromUsuariosSelector.getUsuarios)
    .subscribe((usuarios: usuarioModel[]) => {
      this.listaUsuariosSpy3 = usuarios.filter((filter)=> filter.perfil == 'Spy');
    });

    
  }
    //jeito 4
    pesquisa(busca: string){
      console.log(busca)
      this.store
      .select(fromUsuariosSelector.getUsuariosPerfil,{perfil: busca})
      .subscribe((usuarios: usuarioModel[]) => {
        this.listaUsuariosSpy4 = usuarios;
      });
    }
}
