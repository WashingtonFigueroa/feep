import { Component, OnInit } from '@angular/core';
import {InscripcionService} from "../../inscripcion/inscripcion.service";
import {environment} from "../../../environments/environment.prod";
import {AnexoService} from "../anexo.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-anexo-index',
  templateUrl: './anexo-index.component.html',
  styleUrls: ['./anexo-index.component.scss']
})
export class AnexoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    anexos: any = null;
    valor = '';
    url_base = environment.servidor + 'anexos-archivo/';
    constructor(private anexoService: AnexoService,
                private toastrService: ToastrService) {
        this.anexoService.index()
            .subscribe((res: any) => {
                this.anexos = res;
                this.current_page = this.anexos.current_page;
                this.prev_page = this.anexos.prev_page_url;
                this.next_page = this.anexos.next_page_url;
                this.last_page = this.anexos.last_page;
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
                url: environment.servidor + 'anexos?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.anexoService.pagination(url)
            .subscribe((res: any) => {
                this.anexos = res;
                this.current_page = this.anexos.current_page;
                this.prev_page = this.anexos.prev_page_url;
                this.next_page = this.anexos.next_page_url;
                this.last_page = this.anexos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.anexoService.buscar(valor)
            .subscribe((res: any) => {
                this.anexos = res;
                this.current_page = this.anexos.current_page;
                this.prev_page = this.anexos.prev_page_url;
                this.next_page = this.anexos.next_page_url;
                this.last_page = this.anexos.last_page;
                this.loadPages();
            });
    }
    destroy(anexos, index) {
        if (confirm('Esta seguro de eliminar el anexo')) {
            this.anexoService.destroy(anexos.anexo_id)
                .subscribe((res: any) => {
                    this.anexos.data.splice(index, 1);
                });
        }
    }
}
