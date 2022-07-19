import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuario';
import { usuarioService } from 'src/app/repositories/usuarioService';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss'],
})
export class CadastroUsuariosComponent implements OnInit {
  model: usuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };
  constructor(private usuarioService: usuarioService) {}

  ngOnInit(): void {}

  addUsuario() {
    if (this.model.id == 0) {
      //cadastra
      this.usuarioService.addUsuario(this.model).subscribe();
    } else {
      //atualiza
    }
  }
}
