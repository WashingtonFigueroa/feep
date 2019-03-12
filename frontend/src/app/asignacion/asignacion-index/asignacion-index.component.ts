import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {AsignacionService} from '../asignacion.service';

@Component({
  selector: 'app-asignacion-index',
  templateUrl: './asignacion-index.component.html',
  styleUrls: ['./asignacion-index.component.scss']
})
export class AsignacionIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    insumos: any = null;
    valor = '';
    url_base = environment.servidor + 'insumos-imagen/';
    constructor(private insumosService: AsignacionService) {
        this.insumosService.index()
            .subscribe((res: any) => {
                this.insumos = res;
                this.current_page = this.insumos.current_page;
                this.prev_page = this.insumos.prev_page_url;
                this.next_page = this.insumos.next_page_url;
                this.last_page = this.insumos.last_page;
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
                url: environment.servidor + 'insumos?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.insumosService.pagination(url)
            .subscribe((res: any) => {
                this.insumos = res;
                this.current_page = this.insumos.current_page;
                this.prev_page = this.insumos.prev_page_url;
                this.next_page = this.insumos.next_page_url;
                this.last_page = this.insumos.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.insumosService.buscar(valor)
            .subscribe((res: any) => {
                this.insumos = res;
                this.current_page = this.insumos.current_page;
                this.prev_page = this.insumos.prev_page_url;
                this.next_page = this.insumos.next_page_url;
                this.last_page = this.insumos.last_page;
                this.loadPages();
            });
    }
    destroy(insumos, index) {
        if (confirm('Esta seguro de eliminar el Insumo')) {
            this.insumosService.destroy(insumos.insumo_id)
                .subscribe((res: any) => {
                    this.insumos.data.splice(index, 1);
                });
        }
    }
}
