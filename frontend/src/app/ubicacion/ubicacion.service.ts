import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "../../../node_modules/@angular/common/http";

@Injectable()
export class UbicacionService {

    base = environment.servidor;
    constructor(private http: HttpClient) { }

    indexprovincias() {
        return this.http.get(`${this.base}provincias`);
    }
    provinciaslistar() {
        return this.http.get(`${this.base}provincias-listar`);
    }
    loadprovincias(url) {
        return this.http.get(url);
    }
    showprovincias(id) {
        return this.http.get(`${this.base}provincias/${id}`);
    }
    storeprovincias(request) {
        return this.http.post(`${this.base}provincias`, request);
    }
    updateprovincias(id, request) {
        return this.http.put(`${this.base}provincias/${id}`, request);
    }
    destroyprovincias(id) {
        return this.http.delete(`${this.base}provincias/${id}`);
    }
    //Rutas Ciudad
    indexciudades() {
        return this.http.get(`${this.base}ciudades`);
    }
    ciudadeslistar() {
        return this.http.get(`${this.base}ciudades-listar`);
    }
    loadciudades(url) {
        return this.http.get(url);
    }
    showciudades(id) {
        return this.http.get(`${this.base}ciudades/${id}`);
    }
    storeciudades(request) {
        return this.http.post(`${this.base}ciudades`, request);
    }
    updateciudades(id, request) {
        return this.http.put(`${this.base}ciudades/${id}`, request);
    }
    destroyciudades(id) {
        return this.http.delete(`${this.base}ciudades/${id}`);
    }
    //servico barrios
    indexbarrios() {
        return this.http.get(`${this.base}barrios`);
    }
    barrioslistar() {
        return this.http.get(`${this.base}barrios-listar`);
    }
    loadbarrios(url) {
        return this.http.get(url);
    }
    showbarrios(id) {
        return this.http.get(`${this.base}barrios/${id}`);
    }
    storebarrios(request) {
        return this.http.post(`${this.base}barrios`, request);
    }
    updatebarrios(id, request) {
        return this.http.put(`${this.base}barrios/${id}`, request);
    }
    destroybarrios(id) {
        return this.http.delete(`${this.base}barrios/${id}`);
    }

    //Rutas Comunidad
    indexcomunidades() {
        return this.http.get(`${this.base}comunidades`);
    }
    comunidadeslistar() {
        return this.http.get(`${this.base}comunidades-listar`);
    }
    loadcomunidades(url) {
        return this.http.get(url);
    }
    showcomunidades(id) {
        return this.http.get(`${this.base}comunidades/${id}`);
    }
    storecomunidades(request) {
        return this.http.post(`${this.base}comunidades`, request);
    }
    updatecomunidades(id, request) {
        return this.http.put(`${this.base}comunidades/${id}`, request);
    }
    destroycomunidades(id) {
        return this.http.delete(`${this.base}comunidades/${id}`);
    }
    //Rutas Parroquias
    indexparroquias() {
        return this.http.get(`${this.base}parroquias`);
    }
    parroquiaslistar() {
        return this.http.get(`${this.base}parroquias-listar`);
    }
    loadparroquias(url) {
        return this.http.get(url);
    }
    showparroquias(id) {
        return this.http.get(`${this.base}parroquias/${id}`);
    }
    storeparroquias(request) {
        return this.http.post(`${this.base}parroquias`, request);
    }
    updateparroquias(id, request) {
        return this.http.put(`${this.base}parroquias/${id}`, request);
    }
    destroyparroquias(id) {
        return this.http.delete(`${this.base}parroquias/${id}`);
    }


}
