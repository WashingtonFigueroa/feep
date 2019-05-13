import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class DashboardService {

    base = environment.servidor;
    constructor(private http: HttpClient) { }
    index() {
        return this.http.get(`${this.base}reportes`);
    }
    listar() {
        return this.http.get(`${this.base}reportes-listar`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}reportes-buscar/${valor}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
    eventos_mes() {
        return this.http.get(`${this.base}eventos_mes`);
    }
    beneficiariosMes() {
        return this.http.get(`${this.base}beneficiariosMes`);
    }
}
