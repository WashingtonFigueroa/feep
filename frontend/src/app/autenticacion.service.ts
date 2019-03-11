import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {map} from 'rxjs/operators';

@Injectable()
export class AutenticacionService {

  base = environment.servidor;
  constructor(private http: HttpClient) { }

  login(req: any) {
    return this.http.post(`${this.base}v1/login`, req)
        .pipe(map((usuario: any) => {
          if (usuario.token) {
            const token = btoa(JSON.stringify(usuario.token));
            localStorage.setItem('fepp-token', token);
          }
          return usuario;
        }));
  }

  logout() {
    localStorage.removeItem('fepp-token');
  }
}
