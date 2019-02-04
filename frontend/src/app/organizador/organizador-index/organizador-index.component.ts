import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {OrganizadorService} from "../organizador.service";

@Component({
  selector: 'app-organizador-index',
  templateUrl: './organizador-index.component.html',
  styleUrls: ['./organizador-index.component.scss']
})
export class OrganizadorIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    organizadores: any = null;
    valor = '';
    constructor(private organizadorService: OrganizadorService) {
        this.organizadorService.index()
            .subscribe((res: any) => {
                this.organizadores = res;
                this.current_page = this.organizadores.current_page;
                this.prev_page = this.organizadores.prev_page_url;
                this.next_page = this.organizadores.next_page_url;
                this.last_page = this.organizadores.last_page;
                this.loadPages();
            });
    }

    ngOnInit() {
    }

    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.last_page; i++) {
            this.pages.push({
                item: i,
                url: environment.servidor + 'organizadores?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.organizadorService.pagination(url)
            .subscribe((res: any) => {
                this.organizadores = res;
                this.current_page = this.organizadores.current_page;
                this.prev_page = this.organizadores.prev_page_url;
                this.next_page = this.organizadores.next_page_url;
                this.last_page = this.organizadores.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.organizadorService.buscar(valor)
            .subscribe((res: any) => {
                this.organizadores = res;
                this.current_page = this.organizadores.current_page;
                this.prev_page = this.organizadores.prev_page_url;
                this.next_page = this.organizadores.next_page_url;
                this.last_page = this.organizadores.last_page;
                this.loadPages();
            });
    }
    destroy(organizadores, index) {
        if (confirm('Esta seguro de eliminar al organizadores')) {
            this.organizadorService.destroy(organizadores.organizacion_evento_id)
                .subscribe((res: any) => {
                    this.organizadores.data.splice(index, 1);
                });
        }
    }
}
