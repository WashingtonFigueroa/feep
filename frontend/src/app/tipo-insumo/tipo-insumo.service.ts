import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TipoInsumoService {

  base = environment.servidor;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(`${this.base}tipo-insumos`);
  }
  store($request) {
    return this.http.post(`${this.base}tipo-insumos`, $request);
  }

}
