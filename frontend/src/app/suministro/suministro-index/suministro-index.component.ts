import { Component, OnInit } from '@angular/core';
import {SuministroService} from '../suministro.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-suministro-index',
  templateUrl: './suministro-index.component.html',
  styleUrls: ['./suministro-index.component.scss']
})
export class SuministroIndexComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    suministros: any = null;
    valor = '';
    constructor(private suministroService: SuministroService,
                private toastrService:ToastrService ) {
        this.suministroService.index().subscribe((res: any) => {
            this.suministros = res;
            this.current_page = this.suministros.current_page;
            this.prev_page = this.suministros.prev_page_url;
            this.next_page = this.suministros.next_page_url;
            this.last_page = this.suministros.last_page;
            this.loadPages();
        });
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.suministros.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.suministros.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.suministroService.pagination(url)
            .subscribe((res: any) => {
                this.suministros = res;
                this.current_page = this.suministros.current_page;
                this.prev_page = this.suministros.prev_page_url;
                this.next_page = this.suministros.next_page_url;
                this.last_page = this.suministros.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.suministroService.buscar(valor)
            .subscribe((res: any) => {
                this.suministros = res;
                this.current_page = this.suministros.current_page;
                this.prev_page = this.suministros.prev_page_url;
                this.next_page = this.suministros.next_page_url;
                this.last_page = this.suministros.last_page;
                this.loadPages();
            });
    }
    destroy(suministro, index) {
        if (confirm('Esta seguro de eliminar el suministro ' + suministro.nombre)) {
            this.suministroService.destroy(suministro.suministro_id)
                .subscribe((res: any) => {
                    this.suministros.data.splice(index, 1);
                });
        }
    }
}
