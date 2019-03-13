import { Component, OnInit } from '@angular/core';
import {TipoEventoService} from '../tipo-evento.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-evento-index',
  templateUrl: './tipo-evento-index.component.html',
  styleUrls: ['./tipo-evento-index.component.scss']
})
export class TipoEventoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipoEventos: any = null;
    valor = '';
    constructor(private tipoEventoService: TipoEventoService,
                private toastrService:ToastrService ) {
        this.tipoEventoService.index().subscribe((res: any) => {
            this.tipoEventos = res;
            this.current_page = this.tipoEventos.current_page;
            this.prev_page = this.tipoEventos.prev_page_url;
            this.next_page = this.tipoEventos.next_page_url;
            this.last_page = this.tipoEventos.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.tipoEventos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipoEventos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.tipoEventoService.pagination(url)
            .subscribe((res: any) => {
                this.tipoEventos = res;
                this.current_page = this.tipoEventos.current_page;
                this.prev_page = this.tipoEventos.prev_page_url;
                this.next_page = this.tipoEventos.next_page_url;
                this.last_page = this.tipoEventos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.tipoEventoService.buscar(valor)
            .subscribe((res: any) => {
                this.tipoEventos = res;
                this.current_page = this.tipoEventos.current_page;
                this.prev_page = this.tipoEventos.prev_page_url;
                this.next_page = this.tipoEventos.next_page_url;
                this.last_page = this.tipoEventos.last_page;
                this.loadPages();
            });
    }
    destroy(tipoevento, index) {
        if (confirm(`¿Esta seguro de eliminar ${tipoevento.nombre}?`)) {
            this.tipoEventoService.destroy(tipoevento.tipo_evento_id)
                .subscribe((res: any) => {
                    this.tipoEventos.data.splice(index, 1);
                });
        }
    }
}
