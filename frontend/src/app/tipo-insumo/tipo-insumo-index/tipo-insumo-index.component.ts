import { Component, OnInit } from '@angular/core';
import {TipoInsumoService} from '../tipo-insumo.service';
import {TipoService} from '../../tipo/tipo.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-insumo-index',
  templateUrl: './tipo-insumo-index.component.html',
  styleUrls: ['./tipo-insumo-index.component.scss']
})
export class TipoInsumoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipo_insumos: any = null;
    valor = '';
    constructor(private tipoInsumoService: TipoService,
                private toastrService:ToastrService ) {
        this.tipoInsumoService.index().subscribe((res: any) => {
            this.tipo_insumos = res;
            this.current_page = this.tipo_insumos.current_page;
            this.prev_page = this.tipo_insumos.prev_page_url;
            this.next_page = this.tipo_insumos.next_page_url;
            this.last_page = this.tipo_insumos.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.tipo_insumos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipo_insumos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.tipoInsumoService.pagination(url)
            .subscribe((res: any) => {
                this.tipo_insumos = res;
                this.current_page = this.tipo_insumos.current_page;
                this.prev_page = this.tipo_insumos.prev_page_url;
                this.next_page = this.tipo_insumos.next_page_url;
                this.last_page = this.tipo_insumos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.tipoInsumoService.buscar(valor)
            .subscribe((res: any) => {
                this.tipo_insumos = res;
                this.current_page = this.tipo_insumos.current_page;
                this.prev_page = this.tipo_insumos.prev_page_url;
                this.next_page = this.tipo_insumos.next_page_url;
                this.last_page = this.tipo_insumos.last_page;
                this.loadPages();
            });
    }
    destroy(tipo_insumo, index) {
        if (confirm(`¿Esta seguro de eliminar ${tipo_insumo.nombre}?`)) {
            this.tipoInsumoService.destroy(tipo_insumo.tipo_insumo_id)
                .subscribe((res: any) => {
                    this.tipo_insumos.data.splice(index, 1);
                });

        }
    }
}
