import { Component, OnInit } from '@angular/core';
import {TipoService} from '../tipo.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipo-index',
  templateUrl: './tipo-index.component.html',
  styleUrls: ['./tipo-index.component.scss']
})
export class TipoIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    tipos: any = null;
    valor = '';
    constructor(private tipoService: TipoService,
                private toastrService:ToastrService ) {
        this.tipoService.index().subscribe((res: any) => {
            this.tipos = res;
            this.current_page = this.tipos.current_page;
            this.prev_page = this.tipos.prev_page_url;
            this.next_page = this.tipos.next_page_url;
            this.last_page = this.tipos.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.tipos.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.tipos.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.tipoService.pagination(url)
            .subscribe((res: any) => {
                this.tipos = res;
                this.current_page = this.tipos.current_page;
                this.prev_page = this.tipos.prev_page_url;
                this.next_page = this.tipos.next_page_url;
                this.last_page = this.tipos.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.tipoService.buscar(valor)
            .subscribe((res: any) => {
                this.tipos = res;
                this.current_page = this.tipos.current_page;
                this.prev_page = this.tipos.prev_page_url;
                this.next_page = this.tipos.next_page_url;
                this.last_page = this.tipos.last_page;
                this.loadPages();
            });
    }
    destroy(tipo, index) {
        if (confirm('Esta seguro de eliminar el tipo ' + tipo.nombre)) {
            this.tipoService.destroy(tipo.tipo_id)
                .subscribe((res: any) => {
                    this.tipos.data.splice(index, 1);
                });
        }
    }
}
