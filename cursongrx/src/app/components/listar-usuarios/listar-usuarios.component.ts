import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuario';
import { usuarioService } from 'src/app/repositories/usuarioService';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  listaUsuarios: usuarioModel[] = [];
  constructor(private usuarioService: usuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: usuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });
  }
}
