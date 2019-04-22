import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {ToastrService} from 'ngx-toastr';
import {DashboardService} from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    prev_page: string = null;
    next_page: string = null;
    last_page: number = null;
    pages: any = [];
    current_page: any = null;
    reportes: any = null;
    num_asistentes: any = null;
    valor = '';
    base_imagen: string = environment.servidor + 'eventos-imagen/';
    today: Date;
    constructor(private dashboardService: DashboardService,
                private toastr: ToastrService) {
        this.dashboardService.index()
            .subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
        this.num_asistentes = dashboardService.numero_asistentes();
        this.today = new Date();
    }
    ngOnInit() {
    }
    loadPages() {
        this.pages = [];
        for (let i = 1; i <= this.reportes.last_page;  i++) {
            this.pages.push({
                page: i,
                url: this.reportes.path + '?page=' + i
            });
        }
    }
    loadPagination(url: string) {
        this.dashboardService.pagination(url)
            .subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
    }
    buscar(valor: string) {
        this.dashboardService.buscar(valor)
            .subscribe((res: any) => {
                this.reportes = res;
                this.current_page = this.reportes.current_page;
                this.prev_page = this.reportes.prev_page_url;
                this.next_page = this.reportes.next_page_url;
                this.last_page = this.reportes.last_page;
                this.loadPages();
            });
    }
}