import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable()
export class ReporteService {
    base = environment.servidor;
    constructor(private http: HttpClient) { }
    reportes_indexbeneficiarios() {
        return this.http.get(this.base + 'reportes-indexbeneficiarios');
    }
    reportes_beneficiario(start, end) {
        return this.http.get(this.base + 'reportes-beneficiario/' + start + '/' + end);
    }
    buscar(valor: string = '') {
        return this.http.get(`${this.base}reportes-beneficiario-buscar/${valor}`);
    }
    pagination(url: string) {
        return this.http.get(url);
    }
    excelProyectos() {
        return this.http.get(this.base + 'excelProyectos');
    }
    excelBeneficiarios() {
        return this.http.get(this.base + 'excelBeneficiarios');
    }
    excelOrganizaciones() {
        return this.http.get(this.base + 'excelOrganizaciones');
    }
    excelPorInsumo(dato, start, end) {
        return this.http.get(this.base + 'excelPorInsumo/' + dato + '/' + start + '/' + end);
    }
    excelPorParroquia(dato1, start2, end3) {
        return this.http.get(this.base + 'excelPorParroquia/' + dato1 + '/' + start2 + '/' + end3);
    }
}
