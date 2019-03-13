import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class PrivilegioService {

  base = environment.servidor;
  constructor(private http: HttpClient) { }

  store(req: any) {
    return this.http.post(`${this.base}privilegios`, req);
  }
}
