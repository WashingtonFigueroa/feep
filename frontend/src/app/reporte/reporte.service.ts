import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class ReporteService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }

    reportes_beneficiario() {
        return this.http.get(`${this.base}reportes-beneficiario`);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}reportes-beneficiario-buscar/${valor}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
}
