import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {EventoService} from "../evento.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-evento-index',
  templateUrl: './evento-index.component.html',
  styleUrls: ['./evento-index.component.scss']
})
export class EventoIndexComponent implements OnInit {

    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    eventos: any = null;
    valor = '';
    constructor(private eventoService: EventoService,
                private toastrService: ToastrService) {
        this.eventoService.index()
            .subscribe((res: any) => {
                this.eventos = res;
                this.current_page = this.eventos.current_page;
                this.prev_page = this.eventos.prev_page_url;
                this.next_page = this.eventos.next_page_url;
                this.last_page = this.eventos.last_page;
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
                url: environment.servidor + 'eventos?page=' + i
            });
        }
    }

    loadPagination(url: string) {
        this.eventoService.pagination(url)
            .subscribe((res: any) => {
                this.eventos = res;
                this.current_page = this.eventos.current_page;
                this.prev_page = this.eventos.prev_page_url;
                this.next_page = this.eventos.next_page_url;
                this.last_page = this.eventos.last_page;
                this.loadPages();
            });
    }

    buscar(valor: string) {
        this.eventoService.buscar(valor)
            .subscribe((res: any) => {
                this.eventos = res;
                this.current_page = this.eventos.current_page;
                this.prev_page = this.eventos.prev_page_url;
                this.next_page = this.eventos.next_page_url;
                this.last_page = this.eventos.last_page;
                this.loadPages();
            });
    }
    destroy(evento, index) {
        if (confirm('Esta seguro de eliminar al evento ' + evento.nombres)) {
            this.eventoService.destroy(evento.evento_id)
                .subscribe((res: any) => {
                    this.eventos.data.splice(index, 1);
                });
        }
    }
}
