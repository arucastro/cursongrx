import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuarioModel } from '../models/usuario';



@Injectable({providedIn:'root'})
export class usuarioService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<usuarioModel[]>(this.baseUrl);
  }

  getUsuario(id: number) {
    return this.http.get<usuarioModel>(this.baseUrl + id);
  }

  addUsuario(record: usuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<usuarioModel>(this.baseUrl, JSON.stringify(record), {
      headers: headers,
    });
  }

  updateUsuario(record: usuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.put<usuarioModel>(this.baseUrl + record.id, JSON.stringify(record), {
      headers: headers,
    });
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.delete(this.baseUrl + id, {
      headers: headers,
    });
  }
}
